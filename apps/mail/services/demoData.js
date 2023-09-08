import { utilService } from '../../../services/util.service.js'

const demoData = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        isStarred: true,
        sentAt: 1551133930600,
        removedAt: null,
        from: 'someone@gmail.com',
        to: 'michaelscott@theoffice.com'
    },
    {
        id: 'e102',
        subject: 'קבלת רכישה ב-Wolt',
        body: 'Dear Pookie, \n Thank you for ordering at טורק לחמנגון With Wolt! \n We hope you had an amazing time,\n This mail includes your receipt and Order details'
        ,
        isRead: false,
        sentAt: 1693872000000,
        removedAt: null,
        from: 'wolt@keepinbox.com',
        to: 'michaelscott@theoffice.com'
    },
    {
        id: 'e103',
        subject: 'HOLIDAYS ARE COMING 🍎🍯',
        body: 'TURN HOLIDAY MODE ON\nאל תחכו לרגע האחרון עם האאוטפיט המושלם!\nלקראת השנה החדשה והחגים המתקרבים, ריכזנו עבורכם מגוון פריטים ללוק מושלם שיעשו לכם את החג.\nתתכוננו למחמאות...\n\nהחזרות חינם והחזר כספי מלא עד 30 יום'
        ,
        isRead: false,
        sentAt: 1694114757630,
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
        body: "\nReturning to Singapore with our eSIM\nFrom Airalo 👋\n\nPlanning a trip to Singapore? Stay covered with us. Stay connected and avoid high bills with our eSIM for Singapore.\n\nChoose from various plans, starting at a rate of US$4.50:\n7 days with 1GB\n15 days with 2GB\n30 days with 3GB\n30 days with 5GB\n30 days with 10GB"

        ,
        isRead: false,
        sentAt: Date.now(),
        removedAt: null,
        from: 'mailing@airalo.com',
        to: 'michaelscott@theoffice.com'
    },
    {
        id: 'e106',
        subject: 'Top X% calculations are changing! 👀',
        body: "\nNew Updates to\nPoints, Leaderboards, and Ranks\nAt TryHackMe, we always listen to our community and look for ways to improve the platform. As such, we have just introduced some big changes to the way points are awarded and how users are presented on the leaderboard!\n\nFrom today, TryHackMe leaderboards and “Top X%” calculations will only take into account users with more than 100 points.\nIf you have fewer than 100 points, you'll no longer be featured on the leaderboards, and will now see a message on your dashboard to show how many points you need to earn before joining the rankings.\nWith this new update, users will see a more accurate ranking to better reflect their progress in the platform. Unfortunately, this does mean that some users may notice a drop in their rank.\n\nAs always, thank you for being a part of the TryHackMe community!\nLearn more"
        ,
        isRead: false,
        sentAt: 1551122930594,
        removedAt: null,
        from: 'hello@tryhackme.com',
        to: 'michaelscott@theoffice.com'
    },
    {
        id: 'e107',
        subject: '💻 15 JavaScript Techniques to Enhance Your Code ',
        body: "\nStories for Avici\n@avici·Become a member\nMedium daily digest\nTODAY'S HIGHLIGHTS\n\nLevel Up Coding\nRabi Siddique in Level Up Coding·7 min read\n💻 15 JavaScript Techniques to Enhance Your Code\nAs a popular programming language for web development, JavaScript offers a lot of features and…\nInvisible Illness\nAnnie Tanasugarn, PhD in Invisible Illness·7 min readMember-only content\nHow ‘Conditions of Worth’ Can Become People-Pleasing Behavior\nUnderstanding how being taught your value as conditional can lead to “chasing” validation.\nDmitriy Kumantsev\nDmitriy Kumantsev·3 min read\n10 extensions for VSCode that will simplify development\nBefore I start, I should point out that plugins make it easier to work on code, but if there are too many of…\nWeb3 News & Blogging Website—2023\ndeToxic Dev in Web3 News & Blogging Website2023·8 min read\n7 Architecture Design Patterns — You wish you knew before interview\nSource: Undraw\nAnirudh Munipalli\nAnirudh Munipalli·3 min read\nCreate a Screen Recorder with Simple JavaScript\nLearn about this simple to use API that is used for Screen Sharing, Screen recording and more. And create a…"
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
        body: "\nShop Up to 60% Off\nFree Shipping over $50\nVitaly\n\nENGINEERED\nACCESSORIES\n\nMade for the future with 100% recycled stainless steel.\n\nShop All\nContact\nInstagram\nTiktok\nTo ensure you continue receiving our emails,\nadd us to your address book or safe list.\n\nNo longer want to receive these emails? Manage Preferences or Unsubscribe"
        ,
        isRead: false,
        sentAt: 1551133930500,
        removedAt: null,
        from: 'Vitaly',
        to: 'michaelscott@theoffice.com'
    },
    {
        id: 'e109',
        subject: 'Slack account sign in from a new device',
        body: "\nSlack account sign in from a new device\n📱 iPhone in ISR\nIf this was you, you’re all set!\nIf this wasn’t you, please change your password by clicking the button below. You can also enable two-factor authentication to help secure your account.\n\nThis wasn’t me"
        ,
        isRead: false,
        sentAt: 1693811757630,
        removedAt: null,
        from: 'Slack',
        to: 'michaelscott@theoffice.com'
    },
    {
        id: 'e110',
        subject: 'Happy 1st Duoversary, Michael Scott!',
        body: "Dear Michael scott! \nYou were off to a strong start🥳, studying 54 words. \nPick up your Russian progress with a quick lesson! \nTake a look at all you’ve achieved in your first year learning Russian:\nXP earned\n181\nWords studied\n52\nPhrases reviewed\n657\nCONTINUE LEARNING"
        ,
        isRead: false,
        sentAt: 1693824647000,
        removedAt: null,
        from: 'Duolingo',
        to: 'michaelscott@theoffice.com'
    },
    {
        id: 'e111',
        subject: 'Holiday Sale - Flat 25% Off',
        body: "הנחה מתוקה לשנה טובה\nרגע לפני ששנה אחת חולפת ושנה חדשה נכנסת,\nאתם נהנים מ-25% הנחה על מבחר פריטים ב-adidas אונליין!\nרוצו להתחדש, להתלבש ולהתרגש,\nשנה טובה!"
        ,
        isRead: false,
        sentAt: 1691124647000,
        removedAt: null,
        from: 'adidas',
        to: 'michaelscott@theoffice.com'
    },
    {
        id: 'e112',
        subject: 'Exciting new games at the App store! 🛒',
        body: "Add some fun to your day with a new game: \nMini Basketball | Crazy Taxi Classic \nTable Tennis Touch | Head Soccer"
        ,
        isRead: false,
        sentAt: 1691124647000,
        removedAt: null,
        from: 'Apple',
        to: 'michaelscott@theoffice.com'
    },
    {
        id: 'e114',
        subject: 'Hey, where\'s my Trailer?!',
        body: "This is not funny at all, you better have my trailer back at the trailer park ASAP! \nor ill call the Police!"
        ,
        isRead: false,
        sentAt: 1682324647000,
        removedAt: null,
        from: 'jimlahey@gmail.com',
        to: 'michaelscott@theoffice.com'
    },
]

export default demoData;