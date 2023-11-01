import { IPartner, IPerson } from './models';

export const TECHS = [
  {
    name: 'Android',
    link: 'https://developer.android.com/',
    logo: 'https://io.google/2022/app/images/android-logo.svg',
  },

  {
    name: 'Firebase',
    link: 'https://firebase.google.com/',
    logo: 'https://io.google/2022/app/images/firebase-logo.svg',
  },
  {
    name: 'Flutter',
    link: 'https://flutter.dev/',
    logo: 'https://io.google/2022/app/images/flutter-logo.svg',
  },
  {
    name: 'Google Assistant & Smart Home',
    link: 'https://developers.google.com/assistant',
    logo: 'https://io.google/2022/app/images/googleassistant-logo.svg',
  },
  {
    name: 'Google Cloud',
    link: 'https://cloud.google.com/',
    logo: 'https://io.google/2022/app/images/googlecloud-logo.svg',
  },
  {
    name: 'TensorFlow',
    link: 'https://www.tensorflow.org/',
    logo: 'https://io.google/2022/app/images/machinelearning-logo.svg',
  },
  {
    name: 'Web',
    link: 'https://developers.google.com/web',
    logo: 'https://io.google/2022/app/images/web-logo.svg',
  },
];

export const SPONSORS = [];

export const COMMUNITY_PARTNERS: IPartner[] = [
  {
    name: 'Flutter Conf India',
    link: 'https://flutterconf.in',
    image: 'assets/images/partners/flutter-conf-india.png',
    addName: false,
    bgColor: 'var(--devfest-grey)',
  },
  {
    name: 'Kotlin Chandigarh User Group',
    link: 'https://www.linkedin.com/company/kotlin-chandigarh/',
    image: 'assets/images/partners/kotlin-chandigarh-user-group.webp',
    addName: true,
  },
  {
    name: 'D4 Community',
    link: 'https://www.biodrop.io/D4-Community',
    image: 'assets/images/partners/D4-Community.png',
    addName: false,
    bgColor: 'var(--devfest-grey)',
  },
  {
    name: 'Bizzare Coders',
    link: 'https://www.linkedin.com/company/bizarre-coders/',
    image: 'assets/images/partners/bizzare-coders.jpg',
    addName: true,
  },
  {
    name: 'GDSC IKGPTU',
    link: 'https://gdsc.community.dev/ik-gujral-punjab-technical-university-jalandhar/',
    image: 'assets/images/partners/google-community.webp',
    addName: true,
  },
  {
    name: 'GDSC SVIET',
    link: 'https://gdsc.community.dev/swami-vivekanand-institute-of-engineering-technology-chandigarh/',
    image: 'assets/images/partners/google-community.webp',
    addName: true,
  },
  {
    name: 'GDSC GNDU',
    link: 'https://gdsc.community.dev/guru-nanak-dev-university-amritsar/',
    image: 'assets/images/partners/google-community.webp',
    addName: true,
  },
  {
    name: 'GDSC PUP',
    link: 'https://gdsc.community.dev/punjabi-university-patiala/',
    image: 'assets/images/partners/google-community.webp',
    addName: true,
  },
  {
    name: 'TFUG Jalandhar',
    link: 'https://nas.io/tfug-jalandhar',
    image: 'assets/images/partners/tfug-jalandhar.png',
    addName: true,
  },
  {
    name: 'GDSC GNDU RC JAL',
    link: 'https://gdsc.community.dev/guru-nanak-dev-university-regional-campus-jalandhar/',
    image: 'assets/images/partners/google-community.webp',
    addName: true,
  },
  {
    name: 'GDSC LPU',
    link: 'https://gdsc.community.dev/lovely-professional-university-jalandhar/',
    image: 'assets/images/partners/google-community.webp',
    addName: true,
  },
  {
    name: 'GDSC NITJ',
    link: 'https://gdsc.community.dev/dr-b-r-ambedkar-national-institute-of-technology-nit-jalandhar/',
    image: 'assets/images/partners/google-community.webp',
    addName: true,
  },
  {
    name: 'GDSC CU',
    link: 'https://gdsc.community.dev/chandigarh-university-chandigarh/',
    image: 'assets/images/partners/google-community.webp',
    addName: true,
  },
  {
    name: 'GDSC DAVIET',
    link: 'https://gdsc.community.dev/dav-institute-of-engineering-technology-jalandhar/',
    image: 'assets/images/partners/google-community.webp',
    addName: true,
  },
  {
    name: 'GDSC BBSBEC',
    link: 'https://gdsc.community.dev/baba-banda-singh-bahadur-engineering-college-fatehgarh-sahib/',
    image: 'assets/images/partners/google-community.webp',
    addName: true,
  },
  {
    name: 'GDSC CUIET',
    link: 'https://gdsc.community.dev/chitkara-university-chandigarh/',
    image: 'assets/images/partners/google-community.webp',
    addName: true,
  },
  {
    name: 'CDAO',
    link: 'https://www.cdao.fun',
    image: 'assets/images/partners/CDAO.webp',
    addName: true,
  },
  {
    name: 'Coding Bits',
    link: 'https://www.linkedin.com/company/coding-bits/',
    image: 'assets/images/partners/coding-bits-logo.jpeg',
    addName: true,
  },
  {
    name: 'Platform Tech Group',
    link: 'http://www.platformtechs.in',
    image: 'assets/images/partners/platform-tech-group.jpg',
    addName: true,
  },
];

export const VENUE_PARTNERS: IPartner[] = [
  {
    name: 'IK Gujral Punjab Technical University',
    link: 'https://www.ptu.ac.in/',
    image: 'assets/images/partners/ikgptu-classic-logo.png',
    addName: true,
  },
];

export const TICKETING_PARTNERS = [];

export const OTHER_PARTNERS = [];

export const VOLUNTEERS: IPerson[] = [
  {
    name: 'Simar Preet Singh',
    designation: 'Software Engineer',
    organisation: 'Redaptive Inc.',
    photoUrl: 'assets/images/team/simar-preet-singh.jpeg',
  },
  {
    name: 'Veer Pratap Singh',
    designation: 'Tech Lead',
    organisation: 'Antier Solutions',
    photoUrl: 'assets/images/team/veer-pratap-singh.jpg',
  },
  {
    name: 'Amanpreet Kaur',
    designation: 'Mobile Lead',
    organisation: 'O7 Solutions',
    photoUrl: 'assets/images/team/amanpreet-kaur.jpg',
  },
  {
    name: 'Suraj Pandey',
    designation: 'GDSC Lead',
    organisation: 'GDSC IKGPTU',
    photoUrl: 'assets/images/team/suraj_pic.jpg',
  },
  {
    name: 'Kamal Nayan',
    designation: 'Team',
    organisation: 'Bizarre Coders',
    photoUrl: 'assets/images/team/kamal_pic.jpg',
  },
  {
    name: 'Agrim Sharma',
    designation: 'Team',
    organisation: 'Bizarre Coders',
    photoUrl: 'assets/images/team/agrim_pic.jpg',
  },
  {
    name: 'Aryan Sharma',
    designation: 'Team',
    organisation: 'Bizarre Coders',
    photoUrl: 'assets/images/team/aryan_pic.jpg',
  },
  {
    name: 'Mehak',
    designation: 'Team',
    organisation: 'Bizarre Coders',
    photoUrl: 'assets/images/team/mehak_pic.jpg',
  },
  {
    name: 'Simar Sidhu',
    designation: 'Team',
    organisation: 'Bizarre Coders',
    photoUrl: 'assets/images/team/simar_pic.jpg',
  },
  {
    name: 'Lovejeet Singh',
    designation: 'Student',
    organisation: 'DAV University',
    photoUrl: 'assets/images/team/lovejeet_pic.png',
  },
  {
    name: 'Gurkirat Singh',
    designation: 'Student',
    organisation: 'LKCTC',
    photoUrl: 'assets/images/team/gurkirat_pic.jpeg',
  },
  {
    name: 'Surbhi',
    designation: 'Student',
    organisation: 'DAV University',
    photoUrl: 'assets/images/team/surbhi_pic.jpg',
  },
];

export const SPEAKERS: IPerson[] = [
  {
    name: 'Akansha Jain',
    designation: 'Ambassador',
    organisation: 'Women Techmakers',
    photoUrl: 'assets/images/speakers/akansha-jain.jpeg',
    bio: "Hello, I'm Akansha, currently working as a Software Developer at Mokutan Technologies. My expertise lies in crafting applications that make a positive impact in the real world. In the past, I led Google Developer Student Clubs and proudly held the position of Gold Microsoft Learn Student Ambassador. As a Women Techmakers Ambassador, I'm particularly passionate about promoting diversity in the tech world and empowering women to thrive in technology.",
    links: {
      linkedin: 'https://www.linkedin.com/in/akansha-jain-2001/',
      twitter: 'https://twitter.com/Akansha2001',
      github: 'https://github.com/jakansha2001',
      others: 'https://linktr.ee/akansha1611',
    },
  },
  {
    name: 'Abhishek Doshi',
    designation: 'Google Deveoper Expert',
    organisation: 'Dart, Flutter & Firebase',
    photoUrl: 'assets/images/speakers/Abhishek-Doshi.webp',
    bio: "Abhishek Doshi is a Google Developer Expert for Dart, Flutter & Firebase. He is also the Organizer of India's Largest Flutter Conference, Flutter Conf India. With over 5 years of experience working in Flutter & Firebase, he is currently working as Freelancer. He loves helping people with Flutter, Firebase and Community in general.",
    links: {
      linkedin: 'https://www.linkedin.com/in/abhishekdoshi26/',
      twitter: 'https://twitter.com/AbhishekDoshi26',
      github: 'https://github.com/AbhishekDoshi26',
      others: 'https://abhishekdoshi.dev',
    },
  },
];

export const MEDIA_PARTNERS = [
  {
    name: 'HEY PTU',
    link: 'https://instagram.com/hey_p.t.u?igshid=MzRlODBiNWFlZA==',
    image: 'assets/images/partners/hey-ptu.png',
    addName: true,
  },
  {
    name: 'Snapedia',
    link: 'https://instagram.com/snap_edia?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
    image: 'assets/images/partners/snapedia.jpeg',
    addName: true,
  },
];
