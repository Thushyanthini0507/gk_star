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
  
  let changed = false;
  
  // Custom function to clean className strings
  const classMatches = text.match(/className="([^"]+)"/g);
  if (classMatches) {
    classMatches.forEach(match => {
      let className = match.slice(11, -1);
      let classes = className.split(/\s+/);
      
      // Filter out all text- sizing classes
      let sizingClasses = classes.filter(c => /^((sm|md|lg|xl):)?text-[2-9]xl$/.test(c));
      
      if (sizingClasses.length > 2) {
        // It's an exploded chain! Let's clean it up.
        let nonSizing = classes.filter(c => !/^((sm|md|lg|xl):)?text-[2-9]xl$/.test(c));
        
        // Let's assign a reasonable size based on how many there are (more = it was originally a bigger font)
        // Or just default to text-4xl md:text-5xl
        let newSize = 'text-4xl md:text-5xl lg:text-6xl';
        
        nonSizing.push(newSize);
        let newClassName = `className="${nonSizing.join(' ')}"`;
        text = text.replace(match, newClassName);
        changed = true;
      }
    });
  }

  if (changed) {
    fs.writeFileSync(file, text);
    console.log('Fixed ', file);
  }
});
