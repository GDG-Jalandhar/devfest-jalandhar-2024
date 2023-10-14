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
    name: 'GDSC SVIET',
    link: 'https://gdsc.community.dev/swami-vivekanand-institute-of-engineering-technology-chandigarh/',
    image: 'assets/images/partners/google-community.webp',
    addName: true,
  },
  {
    name: 'GDSC IKGPTU',
    link: 'https://gdsc.community.dev/ik-gujral-punjab-technical-university-jalandhar/',
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
];

export const SPEAKERS: IPerson[] = [];
