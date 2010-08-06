<?php
	class Map{
		private $id;
		private $name;
		private $tiles;
		
		public function getId(){
			return $this->id;
		}
		
		public function getName(){
			return $this->name;
		}
		
		public function getTiles(){
			return $this->tiles;
		}
		
		public function setId($id){
			$this->id = $id;
		}
		
		public function setName($name){
			$this->name = $name;
		}
		
		public function setTiles($tiles){
			$this->tiles = $tiles;
		}
		
	}
?>