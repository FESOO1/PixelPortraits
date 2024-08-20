const galleryContainer = document.querySelector('.gallery');
const galleryBackground = document.querySelector('.gallery-background');
const galleryBackgroundImage = document.querySelector('.gallery-background-image');
const body = document.querySelector('body');

const dataPictures = [
    {
        picture: 'https://images.unsplash.com/photo-1712015013953-97eaf11bdc8c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        picture: 'https://images.unsplash.com/photo-1646045878540-0289a8a95ce4?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        picture: 'https://images.unsplash.com/photo-1591181520189-abcb0735c65d?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        picture: 'https://images.unsplash.com/photo-1615116580363-a2ff6d2fd693?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        picture: 'https://images.unsplash.com/photo-1650925226961-25b239a1aaf1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        picture: 'https://images.unsplash.com/photo-1697030131137-c9e3c820817b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        picture: 'https://images.unsplash.com/photo-1711699487364-7975fee8526c?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        picture: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        picture: 'https://images.unsplash.com/photo-1702571202424-84d58143cfcc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
];
  

for (let i = 0; i < 10; i++) {
    const newPicture = document.createElement('div');
    newPicture.innerHTML = `
    <img src="${dataPictures[i].picture}" alt="an image" class="image-itself">
    `;
    newPicture.classList.add('image-container');
    galleryContainer.appendChild(newPicture);

    newPicture.addEventListener('click', () => {
        galleryBackgroundImage.setAttribute('src', dataPictures[i].picture);
        galleryBackground.style.display = 'flex';
        body.style.overflow = 'hidden';

        galleryBackground.addEventListener('click', () => {
            galleryBackground.style.display = 'none';
            body.style.overflow = 'unset';
        });
    });
};