// You can use this vue config file when adding MathType to CKEditor5
const path = require( 'path' );
const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );
const { styles } = require( '@ckeditor/ckeditor5-dev-utils' );

module.exports = {
  transpileDependencies: [
    /ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/,
  ],

  configureWebpack: {
    plugins: [
      new CKEditorWebpackPlugin( {
        language: 'en',
        translationsOutputFile: /app/
      } )
    ]
  },
  chainWebpack: config => {
    const svgRule = config.module.rule( 'svg' );
    svgRule.exclude.add( path.join( __dirname, 'node_modules', '@ckeditor' ) );
    svgRule.exclude.add( path.join( __dirname, 'node_modules', '@wiris' ) );
    config.module
        .rule( 'cke-svg' )
        .test( /[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/ )
        .use( 'raw-loader' )
        .loader( 'raw-loader' );
    config.module
        .rule( 'cke-css' )
        .test( /ckeditor5-[^/\\]+[/\\].+\.css$/ )
        .use( 'postcss-loader' )
        .loader( 'postcss-loader' )
        .tap( () => {
          return styles.getPostCssConfig( {
            themeImporter: {
              themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' ),
            },
            minify: true
          } );
        } );
  }
};
