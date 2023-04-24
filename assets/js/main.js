window.addEventListener('load', function(){

    document.getElementById('popupRL').innerHTML = `
    <div class="popup__area" id="popupArea">
    </div>
        <div class="popup__container">
            <div class="button__container">
                <button id="login_btn" class="activ"><img style="width: 22px;" src="assets/images/icons/signin.png" alt="">Вход</button>
                <button id="reg_btn"><img style="width: 25px;" src="assets/images/icons/signup.png" alt="">Регистрация</button>
            </div>
            <form action="login.php" method="post" id="formRL">
                <div class="input__container">
                    <input type="text" required name="login" placeholder="Логин">
                    <input type="password" required name="password" placeholder="Пароль">
                </div>
                <div class="center-direction mar-2">
                    <button class="blue-btn" type="submit">Вход</button>
                </div>
            </form>
        </div>
    
    `;

    document.getElementById('popup_reg_log_btn').addEventListener('click', function(e){
        document.getElementById('popupRL').classList.add('open');
        e.preventDefault();
    });

    document.getElementById('popupArea').addEventListener('click', function(){
        document.getElementById('popupRL').classList.remove('open');
    });

    document.getElementById('reg_btn').addEventListener('click', function(){
        document.getElementById('login_btn').classList.remove('activ');
        this.classList.add('activ');
        document.getElementById('formRL').setAttribute('action', 'register.php');
        document.getElementById('formRL').querySelector('.blue-btn').innerHTML = 'Регистрация';
        document.getElementById('formRL').querySelector('.input__container').innerHTML = `
            <input type="text" required name="login" placeholder="Логин">
            <input type="email" required name="email" placeholder="Email">
            <input type="text" required name="phone" placeholder="Телефон">
            <input type="password" required name="password" placeholder="Придумайте пароль">
            <input type="password" required name="password_reapet" placeholder="Повторите пароль">
        `;
        document.querySelector('.popup__container').style.maxHeight = '750px';
        document.getElementById('formRL').style.maxHeight = '700px';
    });
    document.getElementById('login_btn').addEventListener('click', function(){
        document.getElementById('reg_btn').classList.remove('activ');
        this.classList.add('activ');
        document.getElementById('formRL').setAttribute('action', 'login.php');
        document.getElementById('formRL').querySelector('.blue-btn').innerHTML = 'Вход';
        document.getElementById('formRL').querySelector('.input__container').innerHTML = `
        <input type="text" required name="login" placeholder="Логин">
        <input type="password" required name="password" placeholder="Пароль">
        `;
        document.querySelector('.popup__container').style.maxHeight = '450px';
        document.getElementById('formRL').style.maxHeight = '400px';
    });

});