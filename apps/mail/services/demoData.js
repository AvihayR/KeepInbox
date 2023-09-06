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
        to: 'micheal@keepinbox.com'
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
        sentAt: 1551133930594,
        removedAt: null,
        from: 'wolt@keepinbox.com',
        to: 'micheal@keepinbox.com'
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
        to: 'micheal@keepinbox.com'
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
        to: 'micheal@keepinbox.com'
    },
    {
        id: 'e105',
        subject: 'ה-eSIM שלנו לסינגפור חוזר 🤳',
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
        from: 'marketing@adidas.co.il',
        to: 'micheal@keepinbox.com'
    },

]

export default demoData;