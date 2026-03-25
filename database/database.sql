CREATE DATABASE IF NOT EXISTS gestion_activos;
USE gestion_activos;

CREATE TABLE employees (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    department VARCHAR(100) NOT NULL
);

CREATE TABLE assets (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(150) NOT NULL,
    category VARCHAR(100) NOT NULL,
    serial_number VARCHAR(100),
    location VARCHAR(150),
    purchase_date DATE,
    purchase_value DECIMAL(10,2),
    status VARCHAR(50) NOT NULL
);

CREATE TABLE assignments (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    asset_id BIGINT NOT NULL,
    employee_id BIGINT NOT NULL,
    assigned_at DATE NOT NULL,
    returned_at DATE NULL,
    notes VARCHAR(255),
    CONSTRAINT fk_assignment_asset FOREIGN KEY (asset_id) REFERENCES assets(id),
    CONSTRAINT fk_assignment_employee FOREIGN KEY (employee_id) REFERENCES employees(id)
);

INSERT INTO employees (full_name, email, department) VALUES
('Juan Pérez', 'juan@empresa.com', 'TI'),
('María López', 'maria@empresa.com', 'Finanzas');

INSERT INTO assets (code, name, category, serial_number, location, purchase_date, purchase_value, status) VALUES
('ACT-001', 'Laptop Dell Latitude', 'Laptop', 'SN12345', 'Oficina Central', '2025-01-10', 950.00, 
'AVAILABLE'),
('ACT-002', 'Monitor LG 24', 'Monitor', 'SN67890', 'Bodega 1', '2025-02-12', 180.00, 'AVAILABLE');
