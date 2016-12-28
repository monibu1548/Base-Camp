# NHN Enter. Base-Camp
![Travis CI](https://travis-ci.org/monibu1548/Base-Camp.svg?branch=develop)
---

## 1. 개발환경
```
SPRING 4.0.4.RELEASE
mybatis 3.1.1
mysql 5.1.31

```


## 2. MySQL DB 생성

```
CREATE TABLE writings(
id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
email VARCHAR(50) NOT NULL,
pw VARCHAR(50) NOT NULL,
text VARCHAR(300),
reg_date DATETIME NOT NULL,
mod_date DATETIME, PRIMARY KEY(id));
```

## 3. 실행

```
mvn text
http://localhost:8080/monibu1548/board
```
