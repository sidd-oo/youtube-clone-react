const profileImage = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/women/3.jpg",
    "https://randomuser.me/api/portraits/men/4.jpg",
    "https://randomuser.me/api/portraits/women/5.jpg",
    "https://randomuser.me/api/portraits/men/6.jpg",
    "https://randomuser.me/api/portraits/women/7.jpg",
    "https://randomuser.me/api/portraits/men/8.jpg",
    "https://randomuser.me/api/portraits/women/9.jpg",
    "https://randomuser.me/api/portraits/men/10.jpg",
    "https://randomuser.me/api/portraits/women/11.jpg",
    "https://randomuser.me/api/portraits/men/12.jpg",
    "https://randomuser.me/api/portraits/women/13.jpg",
    "https://randomuser.me/api/portraits/men/14.jpg",
    "https://randomuser.me/api/portraits/women/15.jpg",
    "https://randomuser.me/api/portraits/men/16.jpg",
    "https://randomuser.me/api/portraits/women/17.jpg",
    "https://randomuser.me/api/portraits/men/18.jpg",
    "https://randomuser.me/api/portraits/women/19.jpg",
    "https://randomuser.me/api/portraits/men/20.jpg",
    "https://randomuser.me/api/portraits/women/21.jpg",
    "https://randomuser.me/api/portraits/men/22.jpg",
    "https://randomuser.me/api/portraits/women/23.jpg",
    "https://randomuser.me/api/portraits/men/24.jpg",
    "https://randomuser.me/api/portraits/women/25.jpg",
    "https://randomuser.me/api/portraits/men/26.jpg",
    "https://randomuser.me/api/portraits/women/27.jpg",
    "https://randomuser.me/api/portraits/men/28.jpg",
    "https://randomuser.me/api/portraits/women/29.jpg",
    "https://randomuser.me/api/portraits/men/30.jpg",
    "https://randomuser.me/api/portraits/women/31.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/33.jpg",
    "https://randomuser.me/api/portraits/men/34.jpg",
    "https://randomuser.me/api/portraits/women/35.jpg",
    "https://randomuser.me/api/portraits/men/36.jpg",
    "https://randomuser.me/api/portraits/women/37.jpg",
    "https://randomuser.me/api/portraits/men/38.jpg",
    "https://randomuser.me/api/portraits/women/39.jpg",
    "https://randomuser.me/api/portraits/men/40.jpg",
    "https://randomuser.me/api/portraits/women/41.jpg",
    "https://randomuser.me/api/portraits/men/42.jpg",
    "https://randomuser.me/api/portraits/women/43.jpg",
    "https://randomuser.me/api/portraits/men/44.jpg",
    "https://randomuser.me/api/portraits/women/45.jpg",
    "https://randomuser.me/api/portraits/men/46.jpg",
    "https://randomuser.me/api/portraits/women/47.jpg",
];


export function generateProfileImage() {
    return profileImage[Math.floor(Math.random() * profileImage.length)];
};