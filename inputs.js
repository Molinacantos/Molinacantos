/* 
Step 7: Connecting EmailOctopus and Calendly to your website
- Add your EmailOctopus and Calendly links between the quotation marks '' below
*/
const emailOctopusScript = '<script async src="https://eocampaign1.com/form/658b19da-5c8c-11ef-b3f9-bd814efd1b77.js" data-form="658b19da-5c8c-11ef-b3f9-bd814efd1b77"></script>'

const calendlyLink = 'https://calendly.com/joebloggs619/30min'


/*
Step 8: Adding your logo
*/
const logoFileName = 'logo.png'


/*
Step 9: Website Content and Branding
- Here we will outline how we want the website to look like
- To do this we will be using HEX codes which we discussed in Step 4  
- Below you can see the HEX codes for the colors white and black

White HEX color code: #FFFFFF
Black HEX color code: #000000
*/

// HIGH PRIORITY CHANGES
// 2. Change project name and colours:
const companyName = 'MOLINA CANTOS'
const companyNameColor = '#000000'

const formButtonBackgroundColor = '#FFD700'
const formButtonTextColor = '#FFFFFF' // Make this either black (#000000) or white (#FFFFFF) depending on what is easiest to read on your button color of choice

// 3. Update social media links:
const facebookLink = 'https://www.facebook.com/profile.php?id=61564113943659'
const instagramLink = 'https://www.instagram.com/molina.cantos/'
const xLink = 'https://x.com/MolinaCantos1'
const linkedinLink = 'https://www.linkedin.com/in/molina-cantos-9068a6323/'
const youtubeLink = 'https://www.youtube.com/@MolinaCantos-k8w'
const tiktokLink = 'https://www.tiktok.com/@molina.cantos?_t=8oxCjVD3QEz&_r=1'
const discordLink = 'https://discord.com'

// 4. Update header and description texts:
const headerText = 'Dresses, Skirts, Blouses, Shirts and so much more  ' // One-line description of what you will offer customers
const descriptionText = 'Fashion at its finest. look good feel good.' // More detailed description of what you will offer customers

const headerTextSize = '66' // Default size is 66
const descriptionTextSize = '42' // Default size is 42

// 5. Update contact email:
const contactEmail = 'example@notflix.com'



// LOW PRIORITY CHANGES
// Branding: Update with different background and text colors if needed
const pageBackgroundColor = '#E1A813'
const pageTextColor = '#FFFFFF'
const formTextColor = '#000000'

// Social media: Update the call to action with your own
const socialMediaCallToAction = 'Find us on social media'

// Waitlist: Update the call to action with your own
const waitlistCallToAction = 'Join the wait-list'

// Calendly: Update the calls to action with your own
const meetingCallToAction = 'Talk to us'
const meetingButtonText = 'Schedule a meeting'



// LOWEST PRIORITY CHANGES (For special cases)
// Forms: Change if it does not fit with your new background color
const formBackgroundColor = '#FFFFFF'
const formBorderColor = '#CCC'

// Social media: Change the colors if they do not fit with your new background color
const facebookLogoColor = '#4267B2'
const instagramLogoColor = '#E1306C'
const xLogoColor = '#000000'
const linkedinLogoColor = '#0077b5'
const youtubeLogoColor = '#FF0000'
const tiktokLogoColor = '#000000'
const discordLogoColor = '#5865F2'
























// Ignore the below code. It allows us to use the variables you have defined.
function splitScript(script) {
    const srcMatch = script.match(/src="([^"]+)"/);
    const dataFormMatch = script.match(/data-form="([^"]+)"/);

    const waitlistFormScriptSrc = srcMatch ? srcMatch[1] : null;
    const waitlistFormScriptDataForm = dataFormMatch ? dataFormMatch[1] : null;

    return {
        waitlistFormScriptSrc,
        waitlistFormScriptDataForm
    };
}

const { waitlistFormScriptSrc, waitlistFormScriptDataForm } = splitScript(emailOctopusScript);
