
(function(){
    
    
    var scores, random, active, gPlay;
    
    initial();
    
    document.querySelector('.roll').addEventListener('click', function(){
        if(gPlay){
           //getting the random number for rolling dice 
            var diceDOM = document.querySelector('.dicedice');
            var dice = Math.floor(Math.random() * 6) + 1;
            
            diceDOM.style.display = 'block';
               
            if(dice !== 1)
            {
                random =random+ dice;
                document.querySelector('#current-' + active).textContent = random;
                
            }
            else{
                afterGame();
                
            } 
        }
        
        
        
    });
    
    document.querySelector('.hold').addEventListener('click', function(){
        if(gPlay){ 
            scores[active] += random;
            
            document.querySelector('#score-' + active).textContent = scores[active];
            
            if(scores[active] >= 100) {
                
                document.querySelector('#name-' + active).textContent = 'Winner!';
                document.querySelector('.dicedice').style.display = 'none';
                document.querySelector('.panel-' + active + '-play').classList.add('winner');
                document.querySelector('.panel-' + active + '-play').classList.remove('active');
                gPlay = false;
            }
            else{
                afterGame();
            }  
            
        }
        
        
    });
    
    
    document.querySelector('.replay').addEventListener('click', initial);
    
    function initial(){
        
        scores = [0,0];
        random = 0;
        active = 0;
        gPlay = true;
        document.querySelector('.dicedice').style.display = 'none';
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1';   
        document.getElementById('name-1').textContent = 'Player 2';    
        document.querySelector('.play1').classList.remove('winner');
        document.querySelector('.play2').classList.remove('winner');
        document.querySelector('.play1').classList.remove('active');
        document.querySelector('.play2').classList.remove('active');
        document.querySelector('.play1').classList.add('active');   
    }
    
    function afterGame(){
        
       
        if(active==0)
        {
            active=1;
        }
        else{
            active=0;
        }
        random = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.play1').classList.toggle('active');
        document.querySelector('.play2').classList.toggle('active');
        document.querySelector('.dicedice').style.display = 'none';
    }
    
    
    
})();

function logout(){
    alert ("Logged out successfully");
    window.location = "../index.html"; //redirecting to another page
    return false;
}






