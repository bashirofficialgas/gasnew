<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'gasnew' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '`=IeQ8sX2N4:5nY.b* F&m<mwI_.RMF[i73}DmdFz{TNi~?S-${LG|onq{AOB8fm' );
define( 'SECURE_AUTH_KEY',  'T>&Id`DFlr=D[VJlmv:4MfI#|iQ|zoAVCC2j7h?6|_*0CKc5(CO)}lL;$|W~bWl]' );
define( 'LOGGED_IN_KEY',    'XN*h^Z4B{7daLX%orKsEm}gbNu1I33*AVF}ES?rY9XZ+_$|jxXh%U&wl~Iw/d:o#' );
define( 'NONCE_KEY',        'YH8PhmYgy<{x70q6W 9yOT:E-;K-LP5J5PxjG^TF`>`[gT]ydc5ZOvlc9p& ]s!+' );
define( 'AUTH_SALT',        '|SVq?z?kBvG3;dM8^?/T/^&Q6i0?N[P5Vz>mA~P%GCd?TOGlxzVwu7)uCH-HLQ+;' );
define( 'SECURE_AUTH_SALT', 'rQi0;-faHWNnjNM!^Dxwu(DfZxgL7uLp]r.m+j|v35-9`HPKYp)Zvdl2^a0?BCMi' );
define( 'LOGGED_IN_SALT',   'ZB*]p7W~_,(}[]E.B|-|nA o9<@RB{Ki4/KX=Ni2EU?A< @YC1iXxd]%RM%COl9)' );
define( 'NONCE_SALT',       ']46P2%2c3PX+J#TkW9&(fuCg=;ilJPf4wZ$9e:zew]hTOBtSt2!-w,zpf:-KzH0I' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
