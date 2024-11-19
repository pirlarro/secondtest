const menu ={
  _meal: '',
  _price : 0,
  
  
  set meal(mealToCheck)
  {
  if (typeof mealToCheck === 'string')
    {
      this._meal = mealToCheck;
      return mealToCheck;
    } else if (Number.isFinite(mealToCheck))
    {
      console.log('The meal \'s name should not contain numbers!');
    }
  },

 set price(priceToCheck)
  {
    if(Number.isFinite(priceToCheck))
    {
      this._price=priceToCheck;
      return priceToCheck;
    }else
    {
      console.log('ERRADO!');
    }
  },

  get todaysSpecial()
  {
    if(this._meal === '' && this._price === 0 )
    {
     return 'Meal or price was not set correctly!';
    }
    else
    {
      return 'Today\'s Special is '+this._meal+' for €'+this._price+'!';
    }
}
  
  };
  
const mealTest = menu.meal='Bitoque';
const mealMenuPrice = menu.price=15;
console.log(mealTest);
console.log(mealMenuPrice);
console.log(menu.todaysSpecial);