package com.company.assetsystem.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "assignments")
public class Assignment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "asset_id", nullable = false)
    private Asset asset;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    @Column(name = "assigned_at")
    private LocalDate assignedAt;

    @Column(name = "returned_at")
    private LocalDate returnedAt;

    private String notes;

    public Assignment() {
    }

    public Long getId() {
        return id;
    }

    public Asset getAsset() {
        return asset;
    }

    public Employee getEmployee() {
        return employee;
    }

    public LocalDate getAssignedAt() {
        return assignedAt;
    }

    public LocalDate getReturnedAt() {
        return returnedAt;
    }

    public String getNotes() {
        return notes;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setAsset(Asset asset) {
        this.asset = asset;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public void setAssignedAt(LocalDate assignedAt) {
        this.assignedAt = assignedAt;
    }

    public void setReturnedAt(LocalDate returnedAt) {
        this.returnedAt = returnedAt;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
