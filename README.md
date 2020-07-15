# Action Log
[![latest version](https://img.shields.io/packagist/v/sycho/flarum-action-log.svg)](https://packagist.org/packages/sycho/flarum-action-log)
![flarum version](https://img.shields.io/badge/flarum-%5E0.1.0--beta.14-%23e7742e?style=flat-square)
![mit license](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square&color=green)
![downloads](https://img.shields.io/packagist/dt/sycho/flarum-action-log?color=%23f28d1a&style=flat-square)

Administration/Moderation log for [Flarum](https://github.com/flarum/flarum).

**Warning**: This is still under development.

<p align=center>
<img src="https://user-images.githubusercontent.com/20267363/87606561-32366680-c6f3-11ea-86a5-2c5d59ebdd78.png" alt="flarum-action-log" width="500">
</p>

## Todo
* Add scheduled task to clean the log.
* Add action name search gambit.

## Actions Logged
* Moderation
  - Discussion
    + Locking
    + Unlocking
    + Deleting
    + Stickying
    + Unstickying
    + Tagging
  - Post
    + Approving
  - User
    + Suspending
    + Unsuspending
* Administration
  - Group
    + Creating
    + Deleting
  - Tag
    + Creating
    + Deleting
  - Extension
    + Enabling
    + Disabling
    + Uninstalling

## Installation
```gitattributes
$ composer require sycho/flarum-action-log
```

## Updating
```gitattributes
$ composer update sycho/flarum-action-log
$ php flarum migrate
$ php flarum cache:clear
```

## Links
* [GitHub](https://github.com/SychO9/flarum-action-log)
* [Packagist](https://packagist.org/packages/sycho/flarum-action-log)
* [Extiverse](https://extiverse.com/extension/sycho/flarum-action-log)

## License
This software is released under the MIT License. A full copy of this license is included in the package file.
