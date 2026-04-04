const fs = require('fs');
const path = require('path');

const headerPath = path.join(__dirname, '../components/Header.js');
const footerPath = path.join(__dirname, '../components/Footer.js');
const ptPath = path.join(__dirname, '../components/PageTemplate.js');

function updateHeader() {
  let content = fs.readFileSync(headerPath, 'utf-8');
  content = content.replace('export default function Header() {', "export default function Header({ currentCitySlug = 'mobile-al' }) {");
  
  // Replace standard href="/mobile-al/service/"
  // Let's use a replacer function for any double quote href targeting /mobile-al/
  content = content.replace(/href="\/mobile-al\/([^"]*)"/g, (match, p1) => {
    return 'href={`/${currentCitySlug}/' + p1 + '`}'
  });
  
  // Replace home links: href="/"
  content = content.replace(/href="\/"/g, "href={currentCitySlug === 'mobile-al' ? '/' : `/${currentCitySlug}/`}");

  fs.writeFileSync(headerPath, content, 'utf-8');
}

function updateFooter() {
  let content = fs.readFileSync(footerPath, 'utf-8');
  content = content.replace('export default function Footer() {', "export default function Footer({ currentCitySlug = 'mobile-al' }) {");
  
  // Replace array links inside the map
  // e.g. ['/mobile-al/house-cleaning/', 'fa-broom', ...]
  content = content.replace(/'\/mobile-al\/([^']+)'/g, (match, p1) => {
    return '`/${currentCitySlug}/' + p1 + '`';
  });
  
  // Replace root link e.g. ['/', 'fa-home', 'Home']
  content = content.replace(/\['\/',/g, "[currentCitySlug === 'mobile-al' ? '/' : `/${currentCitySlug}/`,");
  
  fs.writeFileSync(footerPath, content, 'utf-8');
}

function updatePageTemplate() {
  let content = fs.readFileSync(ptPath, 'utf-8');
  content = content.replace(/<Header \/>/g, "<Header currentCitySlug={city?.slug || 'mobile-al'} />");
  content = content.replace(/<Footer \/>/g, "<Footer currentCitySlug={city?.slug || 'mobile-al'} />");
  fs.writeFileSync(ptPath, content, 'utf-8');
}

updateHeader();
updateFooter();
updatePageTemplate();
console.log('Silo navigation implemented successfully.');
