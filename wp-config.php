<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_dgtwo');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Jt3)>mBkX`z2jE$@vbJ4,$Zwp=xKEBBrx$4G-hLeU$*089wsKU~X|[T#)jXXl9}U');
define('SECURE_AUTH_KEY',  'rN{%6M`;N{Hw}E*C&O[:FI.-i`akuyfzG0rWzSFBc g0?t^+skVsmaO%C0/Q*fo(');
define('LOGGED_IN_KEY',    'EZIPJxHBiU(m!w_PRstXF&#M&QJ6o/)}ve:bx;us=W#30wJ<(2j5KmNdW44C}|H8');
define('NONCE_KEY',        'pZedGUfhz3l2^uB/NV,_@sk+x#&*YJ<[Kf>DKp~>>rYfG2;|k`*ci<UJm`B gX3a');
define('AUTH_SALT',        '|Msf$_~>MxN9Fz6G~c up.08^weiY9^k!xmEo_Q{#r%;m_b/qDxyfuEIYt<G=}ue');
define('SECURE_AUTH_SALT', 'Tt!eaq/LW|>u;&@+Ok9PnEEWcZ^oHD85mXl`*/]DeXBk[Xf&7Y[#JPza:M34A05x');
define('LOGGED_IN_SALT',   'lu~_@t1d9rx7XzsU46:Ys8+%_K_:>K%l,#0?i;Nvmls)WjE4j@[4gHP0I*;~c0>8');
define('NONCE_SALT',       'k}H9Hb,M^-8lpx]~n;WAQ6,g[?U^}80bWHwrX`Vnr>vvx*Zf<Ez$=_VV.ghXZHw-');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
