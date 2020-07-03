<?php
class Car {
	function info(){
    	echo "This is the info function of Car class.";
    }
    function totalCost($tax, $cost){
    	$myCost = $cost + ($cost * $tax/100);
    	echo "The total price is $ {$myCost}";
    }
};

class Chevy extends Car {
	private $cost;
   function __construct($cost){
   	$this->cost = $cost;
   }
   
   public function totalPrice($tax){
   	$this->totalCost($tax, $this->cost);
   }
   function getCost(){return $this->cost;}
}

class Ford extends Chevy {
	private $handlingCost;
    function handling ($handlingCost) {
    	return $this->handlingCost = $handlingCost;
    }
    function getPriceWithHc($tax){
    	//echo "The cost is with handling fee {$this->handlingCost} and price of {$this->getCost()}.";
        $totalCostBeforeTax = $this->getCost() + $this->handlingCost;
        echo "cost: {$totalCostBeforeTax}.";
        return $this->totalPrice($tax, $totalCostBeforeTax);
    }
}


$myCar = new Ford(20000);
$myCar->info();
$myCar->handling(1000);
$myCar->getPriceWithHc(12);

?>