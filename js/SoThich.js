import { SoThichController } from './CONTROLLER.js';
const controller = new SoThichController();
const soThichList = await controller.getTatCaSoThich();

soThichList.forEach(st => {
  const div = document.getElementById(st.MaDiv);
  if (div) {
    if (!div.querySelector('i')) {
      const icon = document.createElement('i');
      icon.className = st.Icon;
      icon.classList.add('st-icon');
      div.querySelector('h2').prepend(icon);
    }

    div.addEventListener('click', () => {
      document.getElementById('popup-ten').textContent = st.Ten;
      document.getElementById('popup-mota').textContent = st.MoTa;

      const mediaContainer = document.getElementById('popup-media');
      mediaContainer.innerHTML = '';

      const imageFiles = st.PhuongTien.filter(pt => pt.match(/\.(jpg|jpeg|png|gif)$/));
      if (imageFiles.length > 0) {
        const imgGroup = document.createElement('div');
        imgGroup.classList.add('st-img-group');

        imageFiles.forEach(pt => {
          const img = document.createElement('img');
          img.src = `../assets/img/SoThich/${pt}`;
          img.alt = st.Ten;
          img.className = imageFiles.length === 1 ? 'st-img-full' : 'st-img-half';
          imgGroup.appendChild(img);
        });

        mediaContainer.appendChild(imgGroup);
      }

      st.PhuongTien.forEach(pt => {
        if (pt.endsWith('.mp3')) {
          const audio = document.createElement('audio');
          audio.controls = true;
          audio.src = `../assets/audio/${pt}`;
          audio.classList.add('st-audio');
          mediaContainer.appendChild(audio);
        }
      });

      document.getElementById('popup-sothich').style.display = 'flex';
    });
  }
});

document.querySelector('#popup-sothich .close').addEventListener('click', () => {
  document.getElementById('popup-sothich').style.display = 'none';
});