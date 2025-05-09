const axios = require('axios');
const cheerio = require('cheerio');
const RSS = require('rss');

async function fetchPatchNotes() {
    try {
        const response = await axios.get('https://www.leagueoflegends.com/en-us/news/tags/patch-notes/');
        const $ = cheerio.load(response.data);
        const feed = new RSS({
            title: 'League of Legends Patch Notes',
            description: 'Latest League of Legends patch notes',
            feed_url: 'https://your-vercel-domain.vercel.app/api/rss',
            site_url: 'https://www.leagueoflegends.com/en-us/news/tags/patch-notes/',
            language: 'en',
            pubDate: new Date(),
        });

        // 查找所有带有aria-label="Patch"的元素
        $('a[aria-label^="Patch"]').each((i, element) => {
            const $element = $(element);
            
            // 提取补丁信息
            const patchInfo = {
                version: $element.attr('aria-label').replace(' Notes', ''),
                date: $element.find('time').attr('datetime'),
                description: $element.find('[data-testid="rich-text-html"] div').text(),
                imageUrl: $element.find('img').attr('src'),
                url: $element.attr('href')
            };
            
            // 添加到RSS feed
            feed.item({
                title: patchInfo.version,
                description: patchInfo.description,
                url: patchInfo.url.startsWith('http') ? patchInfo.url : `https://www.leagueoflegends.com${patchInfo.url}`,
                date: new Date(patchInfo.date),
                enclosure: {
                    url: patchInfo.imageUrl,
                    type: 'image/jpeg'
                }
            });
        });

        return feed.xml();
    } catch (error) {
        console.error('Error fetching patch notes:', error);
        throw error;
    }
}

// Vercel API 路由处理函数
module.exports = async (req, res) => {
    try {
        const rssFeed = await fetchPatchNotes();
        res.setHeader('Content-Type', 'application/xml');
        res.status(200).send(rssFeed);
    } catch (error) {
        res.status(500).send('Error generating RSS feed');
    }
}; 