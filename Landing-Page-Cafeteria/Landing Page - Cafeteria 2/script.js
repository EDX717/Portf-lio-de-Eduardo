  const params = new URLSearchParams(window.location.search);
        const item = params.get('item');
        const nomes = {
            Cappuccino: 'Cappuccino',
            CafeGelado: 'Café Gelado',
            SucoLaranja: 'Suco de Laranja',
            ChocolateQuente: 'Chocolate Quente',
            Croissant: 'Croissant',
            BoloCenoura: 'Bolo de Cenoura',
            PaoQueijo: 'Pão de Queijo',
            Cheesecake: 'Cheesecake'
        };

        const itemName = nomes[item] || 'Item selecionado';
        document.getElementById('item-name').textContent = 'Item: ' + itemName;

        function mostrarMensagem() {
            document.getElementById('success-message').style.display = 'block';
        }