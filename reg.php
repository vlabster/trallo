<!DOCTYPE HTML>
<html>
    <head>
        <title>Регистрация</title>
    </head>
        <body>
        <h2>Регистрация</h2>
        <form action="saveUser.php" method="post" name="reg">
            <p>
                <label>ФИО:<br /></label>
                <input name="fullname" type="text" size="15" maxlength="60" />
            </p>
            <p>
                <label>Номер телефона:<br /></label>
                <input name="phone" type="tel" size="15" maxlength="11" />
            </p>
            <p>
                <label>Email:<br /></label>
                <input name="email" type="text" size="15" maxlength="20" />
            </p>
            <p>
                <label>Логин:<br /></label>
                <input name="login" type="text" size="15" maxlength="20" />
            </p>
            <p>
                <label>Пароль:<br /></label>
                <input name="password" type="password" size="15" maxlength="15" />
            </p>
            <p>
                <label>Описание профиля:<br /></label>
                <input name="description" type="text" size="50" maxlength="255" />
            </p>
            <p>
                <input type="submit" name="submit" value="Зарегистрироваться" />
            </p>
        </form>
    </body>
</html>