// Cài đặt và khởi tạo Wavesurfer.js
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPause');
const seekBar = document.getElementById('seek-bar');
const waveform = document.getElementById('waveform');

// Tạo một đối tượng Wavesurfer
const waveSurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'rgba(255, 255, 255, 0.6)',
    progressColor: 'rgba(0, 204, 255, 0.8)',
    cursorColor: '#ff5722',
    height: 150,
    barWidth: 3
});
// Khi tệp âm thanh đã sẵn sàng, tạo sóng nhạc
waveSurfer.load('https://files.catbox.moe/zzzuhz.mp4');

// Điều khiển Play/Pause
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        waveSurfer.play();
        playPauseButton.textContent = '❚❚'; // Chuyển thành nút Pause
    } else {
        audio.pause();
        waveSurfer.pause();
        playPauseButton.textContent = '▶'; // Chuyển thành nút Play
    }
});
// Cập nhật thanh điều khiển tiến trình khi nhạc đang phát
audio.addEventListener('timeupdate', () => {
    seekBar.value = (audio.currentTime / audio.duration) * 100;
});

// Chuyển tới vị trí mới trong bài hát khi người dùng kéo seek bar
seekBar.addEventListener('input', () => {
    audio.currentTime = (seekBar.value / 100) * audio.duration;
    waveSurfer.seekTo(seekBar.value / 100);
});

// Thêm tuyết rơi
function createSnowflakes() {
    const snowflakeCount = 100;
    const snowContainer = document.querySelector('.snow');

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 3 + 's';
        snowflake.style.animationDelay = Math.random() * 2 + 's';
        snowContainer.appendChild(snowflake);
    }
}
createSnowflakes();
function createSnowflakes() {
    const snowflakeCount = 100;  // Số lượng tuyết
    const snowContainer = document.querySelector('.snow');

     for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄🌸';
        snowflake.style.left = Math.random() * 100 + 'vw';  // Vị trí tuyết
        snowflake.style.animationDuration = Math.random() * 3 + 5 + 's';  // Thời gian rơi tuyết
        snowflake.style.animationDelay = Math.random() * 2 + 's';  // Độ trễ khi tuyết rơi
        snowContainer.appendChild(snowflake);
    }
}

createSnowflakes();
