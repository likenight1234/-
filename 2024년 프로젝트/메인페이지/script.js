        // 로그인 상태 관리
        window.onload = function() {
            const loggedInUser = localStorage.getItem('loggedInUser');
            if (loggedInUser) {
                document.getElementById('username').innerText = loggedInUser + '님';
                document.getElementById('user-item').style.display = 'block';
                document.getElementById('logout-item').style.display = 'block';
                document.getElementById('login-item').style.display = 'none';
                document.getElementById('signup-item').style.display = 'none';
            }
        };

        function logout() {
            localStorage.removeItem('loggedInUser'); // 로그아웃 시 사용자 정보 삭제
            location.reload(); // 페이지 새로고침
        }
