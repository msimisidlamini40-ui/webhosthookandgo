# Hook and Go Logistics Website

## Overview
This is a website for Hook and Go Logistics, a specialized abnormal cargo transportation company founded in 2019 by Gibson Shambwe. The website showcases the company's services, fleet, and contact information.

## Website Structure

### Pages
1. **Home (index.html)** - Main landing page with company introduction and service highlights
2. **About (about.html)** - Information about the company history, mission, vision, and team
3. **Services (service.html)** - Detailed information about the services offered
4. **Gallery (gallery.html)** - Showcase of the company's fleet and projects
5. **Contact (contact.html)** - Contact information and form

### Files
- **HTML Files**: index.html, about.html, service.html, gallery.html, contact.html
- **CSS File**: styles.css - Contains all styling for the website
- **JavaScript File**: script.js - Contains interactive functionality
- **Images Folder**: Contains SVG placeholder images

## Customization Guide

### Replacing Placeholder Images
The website currently uses SVG placeholder images. To replace them with actual photos:

1. Add your actual images to the `Images` folder
2. Update the image paths in the CSS file (styles.css) for:
   - Hero background: `.hero { background: url('Images/your-hero-image.jpg'); }`
   - Banner background: `.page-banner { background: url('Images/your-banner-image.jpg'); }`
   - CTA background: `.cta-section { background: url('Images/your-cta-image.jpg'); }`
3. Replace placeholder images in the gallery with actual images by updating the HTML in gallery.html

### Updating Contact Information
Update the contact information in:
1. The footer section of each HTML file
2. The contact.html page

### Adding Actual Content
1. Replace the placeholder text with actual company information
2. Update the services list with your specific offerings
3. Add actual testimonials from clients
4. Update the team section with actual team members

### Google Maps Integration
To add Google Maps to the contact page:

1. Get a Google Maps API key
2. Replace the map placeholder in contact.html with the Google Maps embed code

## Technical Information

### Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- Font Awesome for icons

### Browser Compatibility
The website is designed to be responsive and compatible with modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

### Responsive Design
The website is fully responsive and will adapt to different screen sizes:
- Desktop
- Tablet
- Mobile

## Maintenance

### Adding New Content
- To add new services, duplicate the service card structure in service.html
- To add new gallery items, duplicate the gallery item structure in gallery.html
- To add new team members, duplicate the team member structure in about.html

### CSS Customization
The main color scheme can be updated by changing the following CSS variables:
- Primary color: `#0077ff`
- Secondary color: `#005bb7`
- Background color: `#f8f9fa`
- Text color: `#333`

## Credits
- Font Awesome for icons
- Google Fonts for typography

---

Developed for Hook and Go Logistics © 2023