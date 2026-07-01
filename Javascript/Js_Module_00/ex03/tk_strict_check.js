/**
 * Function strick check..
 */
function tk_strict_check(value1, value2) {
  if (value1 === value2) 
  {console.log("Strictly Identical");}
  else if (value1 == value2) 
  {console.log("Similar in value but different type");}
  else
  {console.log("Totally Different");}
}

tk_strict_check("Warrior", "Warrior");
tk_strict_check(10, "10");
tk_strict_check(0, false);
tk_strict_check("Warrior", "Mag");
tk_strict_check("Boss", null);


