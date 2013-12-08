# 关于FlatCore

FlatCore是基于Codeigniter的移动应用开发框架，后端功能包括用户管理、后台权限管理等。
前端基于Bootstrap 3，我们希望开发一个扩展性好，易于使用，前后端通用的系统。利用FlatCore你可以很方便的打造自己的轻社区、轻商店、轻问答……。

## 如何使用

	1. clone FlatCore到web目录下的flatcore；
	2. 创建数据库；
	3. 执行/app/config/flatcore.sql;
	4. 修改/app/config下的database.php中关于数据库配置的部分
		$db['default']['hostname'] = 'localhost';
		$db['default']['port'] = '3306';
		$db['default']['username'] = 'root';
		$db['default']['password'] = '123456';
		$db['default']['database'] = 'flatcore';
		$db['default']['dbdriver'] = 'mysql';
		$db['default']['dbprefix'] = 'pre_';
	5. 安装完成，在浏览器中访问：http://localhost/flatcore。