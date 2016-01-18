var Controll = {
    
    init: function () {
        Controll.addListtener();
    },
    
    addListtener: function () {
        
        var form = document.getElementById('form');
        
        form.addEventListener('submit', function(event)  {
            Controll.controll();
            event.preventDefault();
        });
        
    },
    
    controll: function () {
        
        var i = 0,
            j = 0,
            tr = null,
            td = null,
            table = $('.table');
        
        var callback = function (list) {
            list.forEach(function(person) {
                
                var p = {0:person.id,
                         1:person.genero,
                         2:person.nome,
                         3:person.cnpj,
                         4:person.email};
                
                tr = document.createElement('tr');
                for(j=0; j < 5; j++){
                    td = document.createElement('td');
                    td.innerHTML = p[j];
                    tr.appendChild(td);
                }
                table.append(tr);
            });
        };
        
        Controll.getList(callback);
    },
    
    getList: function (callback) {
        $.ajax({
			type: 'GET',
			url: 'PHP/test.php',
			dataType: 'json',
			success: function(list) {
				callback(list);
			}
		});
    }
};

Controll.init();