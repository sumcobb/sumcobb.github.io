/*
	Ion by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
(function($) {
  skel.init({
    reset: 'full',
    breakpoints: {
      // Global.
      global: {
        range: '*',
        href: 'css/style.css',
        containers: 1400,
        grid: {
          gutters: {
            vertical: '4em',
            horizontal: 0
          }
        }
      },
      // XLarge.
      xlarge: {
        range: '-1680',
        href: 'css/style-xlarge.css',
        containers: 1200
      },
      // Large.
      large: {
        range: '-1280',
        href: 'css/style-large.css',
        containers: 960,
        grid: {
          gutters: {
            vertical: '2.5em'
          }
        },
        viewport: {
          scalable: false
        }
      },
      medium: {
        media: '(max-width: 980px)',
        href: 'css/style-medium.css',
        containers: '90%'
      },
      small: {
        media: '(max-width: 736px)',
        href: 'css/style-small.css',
        containers: '90%',
        grid: {
          gutters: ['1.25em', 0]
        }
      },
      xsmall: {
        media: '(max-width: 480px)',
        href: 'css/style-xsmall.css',
      }
    },
    plugins: {
      layers: {
        // Config.
        config: {
          transform: true
        },
        // Navigation Panel.
        navPanel: {
          animation: 'pushX',
          breakpoints: 'medium',
          clickToHide: true,
          height: '100%',
          hidden: true,
          html: '<div data-action="moveElement" data-args="nav"></div>',
          orientation: 'vertical',
          position: 'top-left',
          side: 'left',
          width: 250
        },
        // Navigation Button.
        navButton: {
          breakpoints: 'medium',
          height: '4em',
          html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
          position: 'top-left',
          side: 'top',
          width: '6em'
        }
      }
    }
  });
  $(function() {
    // jQuery ready stuff.
  });
})(jQuery);
