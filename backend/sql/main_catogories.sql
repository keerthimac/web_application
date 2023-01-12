create database arch_database;
use arch_database;


-- CREATE TABLE work_person(
--     work_person_id INT NOT NULL,
--     first_name VARCHAR(50) NOT NULL,
--     last_name VARCHAR(50) NOT NULL,
--     nick_name VARCHAR(50),
--     PRIMARY KEY (work_person_id)
-- );

-- CREATE TABLE telephone_number_type(
--     telephone_number_type_id INT NOT NULL,
--     telephone_number_type VARCHAR(50) NOT NULL,
--     PRIMARY KEY (telephone_number_type_id)
-- );

-- CREATE TABLE work_person_telephone(
--     work_person_id INT NOT NULL,
--     telephone VARCHAR(50) NOT NULL,
--     telephone_number_type_id INT NOT NULL,
--     PRIMARY KEY (work_person_id, telephone),
--     FOREIGN KEY (work_person_id) REFERENCES work_person(work_person_id),
--     FOREIGN KEY (telephone_number_type_id) REFERENCES telephone_number_type(telephone_number_type_id)
-- );



CREATE TABLE sub_contract_company(
    sub_contract_company_id INT NOT NULL AUTO_INCREMENT,
    sub_contract_company_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (sub_contract_company_id)
);

CREATE TABLE project(
    project_id INT NOT NULL AUTO_INCREMENT,
    project_name VARCHAR(50) NOT NULL,
    client_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (project_id)
);

CREATE TABLE project_stage(
    project_stage_id INT NOT NULL AUTO_INCREMENT,
    project_stage VARCHAR(50) NOT NULL,
    PRIMARY KEY (project_stage_id)
);

CREATE TABLE element(
    element_id INT NOT NULL AUTO_INCREMENT,
    element_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (element_id)
);

CREATE TABLE sub_contract(
    sub_contract_id INT NOT NULL AUTO_INCREMENT,
    sub_contract_company_id INT NOT NULL,
    project_id INT NOT NULL,
    project_stage_id INT NOT NULL,
    PRIMARY KEY (sub_contract_id),
    FOREIGN KEY (sub_contract_company_id) REFERENCES sub_contract_company(sub_contract_company_id),
    FOREIGN KEY (project_id) REFERENCES project(project_id),
    FOREIGN KEY (project_stage_id) REFERENCES project_stage(project_stage_id)
);


CREATE TABLE sub_contract_work (
    sub_contract_work_id INT NOT NULL AUTO_INCREMENT,
    element_id INT NOT NULL,
    project_stage_id INT NOT NULL,
    sub_contract_work VARCHAR(50) NOT NULL,
    PRIMARY KEY (sub_contract_work_id),
    FOREIGN KEY (element_id) REFERENCES element(element_id),
    FOREIGN KEY (project_stage_id) REFERENCES project_stage(project_stage_id)
);

CREATE TABLE project_stage_cost(
    project_id INT NOT NULL,
    project_stage_id INT NOT NULL,
    project_stage_value DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(project_id, project_stage_id),
    FOREIGN KEY (project_id) REFERENCES project(project_id),
    FOREIGN KEY (project_stage_id) REFERENCES project_stage(project_stage_id)
);

CREATE TABLE sub_contract_rate(
    sub_contract_work_id INT NOT NULL,
    sub_contract_id INT NOT NULL,
    sub_contract_rate DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(sub_contract_work_id, sub_contract_id),
    FOREIGN KEY (sub_contract_work_id) REFERENCES sub_contract_work(sub_contract_work_id),
    FOREIGN KEY (sub_contract_id) REFERENCES sub_contract(sub_contract_id)
)







