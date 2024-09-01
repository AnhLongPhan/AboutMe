FROM mysql:latest as builder

COPY init-db/* /docker-entryoint-initdb.d/
COPY db/* /docker-entryoint-db.d/

ENV MYSQL_DATABASE=profile
ENV MYSQL_ROOT_PASSWORD=123

EXPOSE 3306

ENTRYPOINT [ "/usr/local/bin/docker-entryoint.sh", "mysqld", "--datadir", "/initialized-db", "--sql-mode", ""]