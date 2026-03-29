const fs = require('fs');
const path = require('path');

const files = [
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/gallery/page.tsx',
  'src/app/join-with-us/page.tsx',
  'src/app/services/page.tsx',
  'src/app/services/[service]/page.tsx'
];

const replacements = [
  { search: /bg-white/g, replace: 'bg-dark-blue' },
  { search: /bg-off-white/g, replace: 'bg-deep-dark' },
  { search: /text-foreground/g, replace: 'text-text-primary' },
  { search: /text-muted-foreground/g, replace: 'text-text-secondary' },
  { search: /border-border-subtle/g, replace: 'border-border-dark' },
  { search: /bg-soft-gray/g, replace: 'bg-card-bg' },
  { search: /bg-background/g, replace: 'bg-dark-blue' }
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    replacements.forEach(({ search, replace }) => {
      content = content.replace(search, replace);
    });

    // Special case for email and phone updates if they exist
    content = content.replace(/hello@gkstar\.com/g, 'gkprivatelimited67@gmail.com');
    content = content.replace(/\+94 77 286 1967/g, '+94 74 369 8753');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log('Update complete.');
