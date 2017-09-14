#! SHELL=/bin/sh
# zyagent

NPM := $(shell which cnpm)

install:
	@echo "安装依赖包"
	$(NPM) install

dev:
	@echo "运行开发环境"
	$(NPM) run dev

build:
	@echo "开始构建"
	$(NPM) run build
