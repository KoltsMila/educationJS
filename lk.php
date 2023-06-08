<?php session_start(); ?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link 
    rel="stylesheet" 
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" 
    integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" 
    crossorigin="anonymous"
    />
  <title>Личный кабинет</title>
  <style>
    body {
      font-size: 1.4rem;
    }
    span {
      margin-left: 0.5rem;
    }
    p>span:nth-child(1), 
    input {
      font-weight: bold;
      color: darkblue;
    }
    h1 {
      padding-bottom: 1.5rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="text-center text-primary">
      Личный кабинет
    </h1>
    <div class="row">
      <div class="col-4 mx-auto">
        <p>Id: <span><?php echo $_SESSION["id"];?></span>
        </p>
        <p>Имя: <span><?= $_SESSION["name"];?></span>
          <span class="edit-btn btn btn-danger">Изменить</span>
          <span class="save-btn btn btn-success" hidden>Сохранить</span>
          <span class="cancel-btn btn btn-secondary" hidden>Отменить</span> 
        </p>

        <p>Фамилия: <span><?php echo $_SESSION["lastname"];?></span> 
          <span class="edit-btn btn btn-danger">Изменить</span>
          <span class="save-btn btn btn-success" hidden>Сохранить</span>
          <span class="cancel-btn btn btn-secondary" hidden>Отменить</span> 
        </p>

        <p>E-mail: <span><?php echo $_SESSION["email"];?></span>
        </p>
      </div>
    </div>
  </div>
  <script>
    let edit_buttons = document.querySelectorAll(".edit-btn");
    let save_buttons = document.querySelectorAll(".save-btn");
    let cancel_buttons = document.querySelectorAll(".cancel-btn");

    for (let i = 0; i < edit_buttons.lenght; i++) {
      
      let inputValue = edit_buttons[i].previousElementSibling.innerText;
      
      edit_buttons[i].addEventListener("click", () => {
        edit_buttons[i].previousElementSibling.innerHTML = `<input type="text" id="inp" value="${inputValue}"/>`;
        save_buttons[i].hidden = false;
        cancel_buttons[i].hidden = false;
        edit_buttons[i].hidden = true;
      });
    
      cancel_buttons[i].addEventListener("click", () => {
        edit_buttons[i].previousElementSibling.innerHTML = inputValue;
        save_buttons[i].hidden = true;
        cancel_buttons[i].hidden = true;
        edit_buttons[i].hidden = false;  
      });
      
      let inpChange = save_buttons[i].previousElementSibling.innerText;
      
      save_buttons[i].addEventListener("click", () => {
        inpChange = document.querySelector('input');
        edit_buttons[i].previousElementSibling.innerHTML = inpChange.value;
        save_buttons[i].hidden = true;
        cancel_buttons[i].hidden = true;
        edit_buttons[i].hidden = false; 
        });
    }
  </script>
  <script 
  src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" 
  integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" 
  crossorigin="anonymous">
  </script>
  <script 
  src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" 
  integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" 
  crossorigin="anonymous">
</script>
</body>
</html>