// Hàm tạo bông tuyết rơi
function createSnowflakes() {
    const snowflakeCount = 100;  // Số lượng bông tuyết
    const snowContainer = document.querySelector('.snow');

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄';  // Biểu tượng bông tuyết
        snowflake.style.left = Math.random() * 100 + 'vw';  // Tạo vị trí ngẫu nhiên từ trái sang phải
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';  // Kích thước ngẫu nhiên từ 10px đến 20px
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';  // Thời gian rơi ngẫu nhiên từ 5s đến 10s
        snowflake.style.animationDelay = Math.random() * 5 + 's';  // Độ trễ ngẫu nhiên để các bông tuyết không đồng loạt rơi
        snowContainer.appendChild(snowflake);
    }
}

// Gọi hàm để tạo tuyết khi trang được tải
createSnowflakes();
