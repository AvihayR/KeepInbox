import { utilService } from '../../../services/util.service.js'

const demoData = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930600,
        removedAt: null,
        from: 'someone@gmail.com',
        to: 'michaelscott@theoffice.com'
    },
    {
        id: 'e102',
        subject: 'קבלת רכישה ב-Wolt',
        body: `
        אביחי, איזה כיף שהזמנת

        הנה הקבלה שלך:
        טורק לחמג׳ון

        ספטמבר 05, 2023, 21:38
        מס' הזמנה: 64f76caasdasd937f94ccb68a1abed
        סה"כ	ILS 121.00
        מסמכי ההזמנה שלך מצורפים למייל זה. אם יש לך שאלות נוספות, אפשר לפנות אלינו דרך הצ'אט
        `,
        isRead: false,
        sentAt: 1693872000000,
        removedAt: null,
        from: 'wolt@keepinbox.com',
        to: 'michaelscott@theoffice.com'
    },
    {
        id: 'e103',
        subject: 'HOLIDAYS ARE COMING 🍎🍯',
        body: `TURN HOLIDAY MODE ON
        אל תחכו לרגע האחרון עם האאוטפיט המושלם!
        לקראת השנה החדשה והחגים המתקרבים, ריכזנו עבורכם מגוון פריטים ללוק מושלם שיעשו לכם את החג.
        תתכוננו למחמאות...


        החזרות חינם והחזר כספי מלא עד 30 יום`
        ,
        isRead: false,
        sentAt: 1551133930500,
        removedAt: null,
        from: 'adidas',
        to: 'michaelscott@theoffice.com'
    },
    {
        id: 'e104',
        subject: 'Almog and 48 others made changes in your shared folders',
        body: utilService.makeLorem()
        ,
        isRead: false,
        sentAt: 1551133930300,
        removedAt: null,
        from: 'dropbox@keepinbox.com',
        to: 'michaelscott@theoffice.com'
    },
    {
        id: 'e105',
        subject: 'Our eSIM is back in Singapore 🦩',
        body: `
        שלנו לסינגפור חוזר eSIM-ה
        אלו מ-Airalo 👋
        
        מתכננים טיול לסינגפור? איתנו תישארו מכוסים. הישארו מחוברים והימנעו מחשבונות גבוהים עם ה-eSIM שלנו לסינגפור.
        
        ביחרו מהתוכניות השונות, המתחילות בתעריף של US$4.50:
        7 ימים עם 1GB
        15 יום עם 2GB
        30 יום עם 3GB
        30 יום עם 5GB
        30 יום עם 10GB
        `
        ,
        isRead: false,
        sentAt: 1551122930594,
        removedAt: null,
        from: 'mailing@airalo.com',
        to: 'michaelscott@theoffice.com'
    },
    {
        id: 'e106',
        subject: 'Top X% calculations are changing! 👀',
        body: `
        New Updates to
        Points, Leaderboards, and Ranks
        At TryHackMe, we always listen to our community and look for ways to improve the platform. As such, we have just introduced some big changes to the way points are awarded and how users are presented on the leaderboard!
        
         
        From today, TryHackMe leaderboards and “Top X%” calculations will only take into account users with more than 100 points.
        If you have fewer than 100 points, you'll no longer be featured on the leaderboards, and will now see a message on your dashboard to show how many points you need to earn before joining the rankings.
        With this new update, users will see a more accurate ranking to better reflect their progress in the platform. Unfortunately, this does mean that some users may notice a drop in their rank.
        
        As always, thank you for being a part of the TryHackMe community!
        Learn more
        `
        ,
        isRead: false,
        sentAt: Date.now(),
        removedAt: null,
        from: 'hello@tryhackme.com',
        to: 'michaelscott@theoffice.com'
    },
    {
        id: 'e107',
        subject: '💻 15 JavaScript Techniques to Enhance Your Code ',
        body: `
        Stories for Avici
        @avici·Become a member
        Medium daily digest
        TODAY'S HIGHLIGHTS
        
        Level Up Coding
        Rabi Siddique in Level Up Coding·7 min read
        💻 15 JavaScript Techniques to Enhance Your Code
        As a popular programming language for web development, JavaScript offers a lot of features and…
        Invisible Illness
        Annie Tanasugarn, PhD in Invisible Illness·7 min readMember-only content
        How ‘Conditions of Worth’ Can Become People-Pleasing Behavior
        Understanding how being taught your value as conditional can lead to “chasing” validation.
        Dmitriy Kumantsev
        Dmitriy Kumantsev·3 min read
        10 extensions for VSCode that will simplify development
        Before I start, I should point out that plugins make it easier to work on code, but if there are too many of…
        Web3 News & Blogging Website—2023
        deToxic Dev in Web3 News & Blogging Website2023·8 min read
        7 Architecture Design Patterns — You wish you knew before interview
        Source: Undraw
        Anirudh Munipalli
        Anirudh Munipalli·3 min read
        Create a Screen Recorder with Simple JavaScript
        Learn about this simple to use API that is used for Screen Sharing, Screen recording and more. And create a…
        `
        ,
        isRead: false,
        sentAt: 1694100757630,
        removedAt: null,
        from: 'Medium',
        to: 'michaelscott@theoffice.com'
    },
    {
        id: 'e108',
        subject: 'We\'re having a SALE 🚨',
        body: `
        Shop Up to 60% Off
        Free Shipping over $50
        Vitaly
         
        ENGINEERED
        ACCESSORIES
            
        Made for the future with 100% recycled stainless steel.
     
        Shop All
        Contact
        Instagram
        Tiktok
        To ensure you continue receiving our emails,
        add us to your address book or safe list.  
        
        No longer want to receive these emails? Manage Preferences or Unsubscribe 
        `
        ,
        isRead: false,
        sentAt: 1694114757630,
        removedAt: null,
        from: 'Vitaly',
        to: 'michaelscott@theoffice.com'
    },
    {
        id: 'e109',
        subject: 'Slack account sign in from a new device',
        body: `
        slack logo
        Slack account sign in from a new device
        📱 iPhone in ISR
        If this was you, you’re all set!
        If this wasn’t you, please change your password by clicking the button below. You can also enable two-factor authentication to help secure your account.

        This wasn’t me
        `
        ,
        isRead: false,
        sentAt: 1693811757630,
        removedAt: null,
        from: 'Slack',
        to: 'michaelscott@theoffice.com'
    },
]

export default demoData;