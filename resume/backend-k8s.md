# Yupo (Jason) Niu

**Senior Backend Developer — Java / Python / Kubernetes** | Calgary, AB, Canada
yupoca24@gmail.com | [linkedin.com/in/yupo-niu](https://linkedin.com/in/yupo-niu) | [github.com/DISSIDIA-986](https://github.com/DISSIDIA-986) | [portfolio.dissidia.tech](https://portfolio.dissidia.tech)

---

## Professional Summary

Senior Backend Developer with **17 years in Java** and **3+ years building Python services**, including 8 years as Team Lead at a publicly traded company designing scalable, cloud-native microservices on Kubernetes serving 10K+ concurrent users. Hands-on expertise containerizing applications with Docker, orchestrating microservices on Kubernetes, building CI/CD pipelines with Jenkins / GitLab Runner / GitHub Actions, and operating production observability stacks (Prometheus, Grafana, ELK). Migrated a monolith → Spring Cloud microservices → Kubernetes with blue-green deployments. Built Kafka-driven real-time risk control pipelines, customized Dubbo RPC framework, and a Java financial decision engine. Graduated SAIT in April 2026 with 3.96 GPA. Canadian work authorization (PGWP).

---

## Technical Skills

- **Languages:** Java (17 years), Python (3+ years), Go, TypeScript, SQL, Bash, Groovy
- **Java Stack:** Spring Boot, Spring Cloud (Hoxton), Spring MVC, Dubbo RPC, Netty, Maven, JUnit, JPA, JVM tuning
- **Python Stack:** FastAPI, Flask, Pandas, SQLAlchemy, Alembic, asyncio, Pydantic, pytest
- **Containers & Orchestration:** Docker, Kubernetes (Alibaba ACK production), K8s manifests, kubectl, Ingress / Nginx, ConfigMaps, Secrets, HPA / autoscaling, blue-green deployments; Helm chart templating
- **Cloud Platforms:** Alibaba Cloud (ACK, RDS, OSS, DTS), GCP (Cloud Run, Cloud Storage), Vercel — Kubernetes / cloud-native patterns transferable to AWS EKS, Azure AKS, and on-premise environments
- **APIs & Microservices:** RESTful API design, OpenAPI / Swagger, publicly exposed APIs (auth, rate limiting, versioning), gRPC concepts, microservices, service mesh, distributed transactions, Nacos service discovery
- **Messaging & Streaming:** Apache Kafka, RocketMQ, RabbitMQ, event-driven architecture, Alibaba DTS (Data Transmission Service)
- **CI/CD & Infrastructure-as-Code:** Jenkins (Pipelines, multi-environment), GitLab CI Runner, GitHub Actions, Docker registry workflows, automated testing, Helm chart templating
- **Observability & Monitoring:** Prometheus, Grafana, OpenTelemetry, Skywalking APM, **ELK stack** (Elasticsearch, Logstash, Kibana), SonarQube, distributed tracing
- **Databases:** **SQL** — PostgreSQL, MySQL (sharding, replication, performance tuning) | **NoSQL** — Redis, MongoDB, Elasticsearch, InfluxDB
- **Security:** OAuth 2.0, JWT, RBAC, network policies, secret management, TLS / mTLS, K8s security contexts
- **Methodology:** Agile / Scrum, Code Review, Test-Driven Development, cross-functional collaboration with frontend / DevOps / SRE

---

## Work Experience

**AI / Backend Developer (Part-time)** — Havenz Tech, Calgary | Aug 2024 – Present

- Designed Python (FastAPI) and .NET backend services packaged with **Docker**, deployed via **GitHub Actions** CI/CD to **GCP Cloud Run** (serverless containers)
- Built RESTful APIs with PostgreSQL persistence, Redis caching, and real-time SignalR communication
- Implemented Python AI workflow services with hybrid retrieval over **PostgreSQL** and OCR document processing

**Senior Full Stack Developer / Team Lead** — Edianyun Inc. (publicly traded), Beijing | Mar 2016 – Apr 2024

- **Migrated monolith → Spring Cloud microservices → Kubernetes** on Alibaba ACK with **Jenkins** and **GitLab CI/CD** pipelines, blue-green deployments, and multi-environment promotion (stage → gray → prod) — supporting 10K+ concurrent users
- Built and operated company-wide **observability stack**: **ELK** for all web systems (hot/cold log storage separation), **Prometheus + Grafana** dashboards, **Skywalking APM** for distributed tracing — significantly reduced API response times and MTTR
- Designed real-time **Kafka**-based event-driven services for risk control: streaming pipelines via Alibaba DTS + Kafka, multi-dimensional credit scoring, automated risk alerting, consumer-group scaling
- Built core **Java + Spring Boot** financial algorithm engine (NPV, ACPI, ROC) — pricing decision engine powering all rental orders, buyout pricing, and risk reserves across multiple leasing models
- Built and maintained custom **Dubbo RPC framework** (based on Apache Dubbo 2.5.3, Netty, Zookeeper) — service registry/discovery, load balancing (Random/RoundRobin/LeastActive), cluster fault tolerance (Failover/Failfast/Failsafe), distributed across all internal microservices
- Customized **XXL-JOB** distributed task scheduling: HA scheduler, sharding broadcast, dynamic task management, runtime code editing — running all company-wide scheduled jobs on K8s
- Architected decision automation platform with multi-level approval workflows (M1→M2→M3→city manager), quota pool management, and 10+ configurable policy types
- Built unified **Spring Boot Starter** library and **RBAC** permission center serving 1K+ internal users across all systems
- Managed K8s **Nginx Ingress** configuration: virtual hosts, path routing, TLS/SSL termination, rate limiting, health checks
- Led 3 development teams (Risk Control, E-commerce, DevOps); enforced code reviews, **SonarQube** quality gates, JVM tuning, and performance benchmarking
- Tech stack evolution: Spring 4.x + Dubbo (2016) → Spring Boot 2.x + Jenkins CI (2018) → Spring Cloud + Nacos + K8s (2020) → Spring Cloud Hoxton + Alibaba DTS (2022)

**Full Stack Developer** — Bitmain Technologies, Beijing | Jun 2014 – Jun 2015

- Independently shipped Java Bitcoin payment system; optimized blockchain confirmation time by 40%
- Maintained Antpool mining pool: PoW revenue distribution algorithm with high-concurrency hashrate statistics
- Integrated with major exchange APIs (Huobi, Binance, OKEx) for automated arbitrage trading

---

## Key Projects

**Edianyun Microservices Platform on Kubernetes (Java + Spring Cloud + Alibaba ACK)** — End-to-end migration of a monolith to ~30 Spring Cloud microservices on Alibaba ACK Kubernetes; Nacos service discovery, Skywalking distributed tracing, Jenkins/GitLab CI pipelines, blue-green deployments

**Real-Time Risk Control Platform (Java + Kafka + Alibaba DTS)** — Streaming risk indicator pipelines using Alibaba DTS data capture + Kafka event bus + multi-dimensional credit scoring models; powered automated risk alerting and decisions across all rental orders

**Custom Dubbo RPC Framework (Java + Netty + Zookeeper)** — Customized Apache Dubbo 2.5.3: service registry / discovery, load balancing strategies, cluster fault tolerance, async invocation — backbone of all internal Java microservice communication

**Industry-AI-Flow — Cloud-Native Backend Platform (Python + FastAPI + PostgreSQL + Redis)** — Production-grade FastAPI backend with SQLAlchemy / Alembic migrations, Docker containerization, GitHub Actions CI, and pytest coverage

**Autonomous-AI-Trade — Production Trading System (Python + FastAPI + InfluxDB + Prometheus + Grafana)** — Multi-layer architecture with FastAPI services, time-series data on InfluxDB, observability via Prometheus + Grafana, Docker deployment, GitHub Actions CI

**JobPilot AI — Automation Pipeline (Python)** — Multi-provider orchestration with circuit breakers (aiobreaker), retry logic (stamina), structured output (instructor / Pydantic), and **1,250+ pytest tests** across the codebase

---

## Education

**Post-Diploma Certificate in Integrated Artificial Intelligence** — SAIT, Calgary | Sep 2025 – Apr 2026
- 3.92/4.0 GPA | Predictive Analytics, Computer Vision, AI Governance

**Post-Diploma Certificate in Data Analytics** — SAIT, Calgary | Sep 2024 – Apr 2025
- 4.0/4.0 GPA | Statistical Analysis, Predictive Analytics, Business Intelligence

---

## Work Authorization

Canadian work authorization (PGWP) — available for full-time employment in Canada

---

## Languages

Chinese (Native) · English (Fluent)
