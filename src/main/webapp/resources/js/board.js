 $( document ).ready( function() {
        var jbOffset = $( '.top-menu' ).offset();
        $( window ).scroll( function() {
          if ( $( document ).scrollTop() > jbOffset.top ) {
            $( '.top-menu' ).addClass( 'menu-fixed' );
          }
          else {
            $( '.top-menu' ).removeClass( 'menu-fixed' );
          }
        });
      } );