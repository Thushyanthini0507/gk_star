const fs = require('fs');

const files = [
  'src/app/page.tsx',
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/gallery/page.tsx',
  'src/app/join-with-us/page.tsx',
  'src/app/services/page.tsx',
  'src/app/services/[service]/page.tsx',
  'src/app/admin/dashboard/page.tsx',
  'src/app/admin/items/page.tsx',
  'src/app/admin/services/page.tsx',
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let text = fs.readFileSync(file, 'utf8');
  
  // Revert the powershell corrupted <h1> tags
  text = text.replace(/<h1-6xl md:text-7xl lg:text-8xl">/g, '<h1 className="font-bold mb-6 tracking-tighter leading-none text-text-primary drop-shadow-sm font-heading animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 text-6xl md:text-7xl lg:text-8xl">');
  
  // Actually, I also need to check if ANY tags like <h1- were generated and fix them.
  // The regex was /<h1(.*?)text-4xl md:text-5xl lg:text-6xl(.*?)/g
  // Which deleted everything between <h1 and text-6xl.
  text = text.replace(/<h1-6xl([^>]*?)>/g, '<h1 className="font-bold mb-6 tracking-tighter leading-none text-text-primary drop-shadow-sm font-heading animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 text-6xl md:text-7xl lg:text-8xl">');

  fs.writeFileSync(file, text);
});

console.log('Fixed broken templates!');
