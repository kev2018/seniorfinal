var exports = module.exports = {};

function PasswordMessage(m){
this.name = "Password Message";
this.message = m;
}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(char<min || char>max){
      return false;
    }
    else {
      return true;
    }
}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
  let hasUpper = false;
  try{
    for(let c=0;c<str.length;c++){
      if(inRange(str[c],65,90)==true){
        hasUpper=true;
      }
    }
    if(hasUpper==true){
      throw new PasswordMessage("has uppercase character.");
    }
    else{
      throw new PasswordMessage("does not have uppercase character");
    }
  }
  catch(e){
      console.log(e.name+": "+e.message);
      return hasUpper;
  }
}


exports.containsLower =function(str){
  let hasLower = false;
  try{
    for(let c=0;c<str.length;c++){
      if(inRange(str[c],97,122)==true){
        hasLower=true;
      }
    }
    if(hasLower==true){
      throw new PasswordMessage("has lowercase character.");
    }
    else{
      throw new PasswordMessage("does not have lowercase character");
    }
  }
  catch(e){
      console.log(e.name+": "+e.message);
      return hasLower;
  }
}


exports.containsNumerical =function(str){
  let has# = false;
  try{
    for(let c=0;c<str.length;c++){
      if(inRange(str[c],48,57)==true){
        has#=true;
      }
    }
    if(has#==true){
      throw new PasswordMessage("has # character.");
    }
    else{
      throw new PasswordMessage("does not have # character");
    }
  }
  catch(e){
      console.log(e.name+": "+e.message);
      return has#;
  }
}


exports.containsSpecial =function(str){
  let hasSpecial = false;
  special = [33,64,35,36,37,94,38,42];
  for(let c=0;c<str.length;c++){
    
  }
}
