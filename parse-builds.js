const fs = require('fs');
const issues = JSON.parse(fs.readFileSync('raw_issues.json', 'utf8'));

function extract(section, body, fallback = "") {
  if (!body) return fallback;
  // Multiline and dotall mode
  const regex = new RegExp(`###\\s*${section}\\s*\\n+([\\s\\S]*?)(?=\\n###|$)`, 'i');
  const match = body.match(regex);
  return match ? match[1].trim() : fallback;
}

function extractImageLinks(text) {
  if (!text) return [];
  return Array.from(text.matchAll(/https?:\/\/\S+\.(?:png|jpg|jpeg|gif)/gi)).map(m => m[0]);
}

const builds = issues.map(issue => {
  const body = issue.body || "";
  return {
    title: issue.title,
    url: issue.html_url,
    created_at: issue.created_at,
    submitter: issue.user.login,
    projectName: extract('Project Name', body, issue.title),
    author: extract('Your Name or Team', body, issue.user.login),
    repoLink: extract('Repository/Code Link', body),
    liveDemo: extract('Live Demo', body),
    description: extract('Description', body),
    instructions: extract('How to Run/Use It', body),
    screenshots: extractImageLinks(extract('Screenshots or GIFs', body))
  }
});

fs.writeFileSync('docs/builds.json', JSON.stringify(builds, null, 2));
