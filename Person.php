<?php 

class Person {
  private $name;
  private $lastname;
  private $age;
  private $hp;
  private $mother;
  private $father;

  function __construct($name, $lastname, $age, $mother=null, $father=null) 
  {
    $this->name = $name;
    $this->lastname = $lastname;
    $this->age = $age;
    $this->mother = $mother;
    $this->father = $father;
    $this->hp = 100;
  }
  function sayHi($name) 
  {
    return "Hi $name, I`m " . $this->name;
  }
  function setHp($hp) 
  {
    if ($this->hp + $hp >= 100) $this->hp = 100;
    else $this->hp = $this->hp + $hp;
  }
  function getHp()
  {
    return $this->hp;
  }
  function getName()
  {
    return $this->name;
  }
  function getLastname()
  {
    return $this->lastname;
  }
  function getMother() 
  {
    return $this->mother;
  }
  function getFather()
  {
    return $this->father;
  }
  function getAge()
  {
    return $this->age;
  }
  function getInfo()
  {
    //вывести данные обо всей родне, включая бабушек и дедушек 
    return "<h2>Несколько слов обо мне</h2>" . "Моё имя: " . $this->getName() . "<br> Моя фамилия: " . $this->getLastname() . "<br> Мой возраст: " . $this->getAge() . " лет" .
      "<br> Моего папу зовут: " . $this->getFather()->getName() . "<br> Мою маму зовут: " . $this->getMother()->getName() . 
      "<br> Моих бабушек зовут: " . $this->getMother()->getMother()->getName() . " " . $this->getMother()->getMother()->getLastname() . " и " . $this->getFather()->getMother()->getName() . "&nbsp" . $this->getFather()->getMother()->getLastname() . 
      "<br> Моих дедушек зовут: " . $this->getMother()->getFather()->getName() . " " . $this->getMother()->getFather()->getLastname() . " и " . $this->getFather()->getFather()->getName() . "&nbsp" . $this->getFather()->getFather()->getLastname();
  }
}

$alex = new Person("Alex", "Grom", 59);
$irina = new Person("Irina", "Grom", 57);
$vasiliy = new Person("Vasiliy", "Beorn", 61);
$agata = new Person("Agata", "Beorn", 60);
$igor = new Person("Igor", "Beorn", 39, $agata, $vasiliy); 
$klara = new Person("Klara", "Beorn", 39, $irina, $alex);
$anton = new Person("Anton", "Beorn", 12, $klara, $igor);

echo $anton->getInfo();

//echo $anton->getMother()->getFather()->getName(); //  function getMother() {return $this->mother;}   function getFather() {return $this->father;}

//Здоровье чела не может быть больше 100
// $medKit = 50;
// $alex->setHp(-30); //упал
// echo $alex->getHp() . "<br>";
// $alex->Sethp($medKit); //нашел аптечку
// echo $alex->getHp();

// echo $alex->sayHi($igor->name) . "<br>";

// echo $igor->sayHi($alex->name);
