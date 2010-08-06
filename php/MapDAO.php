<?php
	class MapDAO{
		private $conn;
		
		public function __construct(){
			include("conf.php");
			$this->conn = mysql_connect($host, $usname, $password);
			if($this->conn){
				mysql_select_db($database);
			}
		}
		
		public function __destruct(){
			if($this->conn)
				mysql_close($this->conn);
		}
		
		public function insert(&$m){
			if($this->conn){
				if($m instanceof Map){
					$query = "INSERT INTO maps 
					VALUES(null, '{$m->getName()}', '{$m->getTiles()}')";
					$res = mysql_query($query, $this->conn);
					if($res){
						$id = mysql_insert_id($this->conn);
						$m->setId($id);
					}
				}
			}
		}
		
		public function selectById($id){
			$m = NULL;
			if($this->conn){			
				$query = "SELECT * FROM maps WHERE id = {$id}";
				$res = mysql_query($query, $this->conn);
				if($res && mysql_num_rows($res)==1){
					$row = mysql_fetch_assoc($res);
					$m = new Map();
					$m->setId((integer)$row['id']);
					$m->setName($row['name']);
					$m->setTiles($row['tiles']);			
				}
			}
			return $m;
		}
		
		public function selectAll(){
			$all = array();
			if($this->conn){			
				$query = "SELECT * FROM maps";
				$res = mysql_query($query, $this->conn);
				if($res){
					while($row = mysql_fetch_assoc($res)){					
						$m = new Map();
						$m->setId((integer)$row['id']);
						$m->setName($row['name']);
						$m->setTiles($row['tiles']);
						array_push($all, $m);
					}
				}
			}
			return $all;
		}
		
		
		
		
	
	}
?>