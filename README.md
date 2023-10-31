# IYF Hungary website

### Links
- [Website](https://iyf.hu/)
- [Google Drive localizations folder](https://drive.google.com/drive/folders/1FMNugFdXIgqgtgj8YvKHO-FMjUdPk7hY?usp=sharing)

### Developer logs
- **2023/08/06** Created the project.
- **2023/08/14** Added basic structure, responsive header, navbar, i18n, deployed website to Firebase Hosting.
- **2023/10/28**
  - Restructured folders, redesigned header, started implementing a custom carousel.
  - Connected domain with Firebase, added SSL certificate.
  - Started using Google Cloud CDN for all static media.
- **2023/10/29**
  - Added animation to the carousel.
  - Added domain and SSL certificate to CDN.
- **2023/10/31** As it turned out that Google Cloud CDN is quite pricy *(for a small project like this)*, I moved to Cloudflare. Transferred DNS nameservers to Cloudflare, added www-to-non-www redirect.

- Later I would like to migrate CRA to Next.js.
