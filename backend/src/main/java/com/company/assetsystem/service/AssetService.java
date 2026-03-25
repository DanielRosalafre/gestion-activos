package com.company.assetsystem.service;

import com.company.assetsystem.dto.AssignmentRequest;
import com.company.assetsystem.entity.Asset;
import com.company.assetsystem.entity.AssetStatus;
import com.company.assetsystem.entity.Assignment;
import com.company.assetsystem.entity.Employee;
import com.company.assetsystem.repository.AssetRepository;
import com.company.assetsystem.repository.AssignmentRepository;
import com.company.assetsystem.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AssetService {

    private final AssetRepository assetRepository;
    private final EmployeeRepository employeeRepository;
    private final AssignmentRepository assignmentRepository;

    public AssetService(
            AssetRepository assetRepository,
            EmployeeRepository employeeRepository,
            AssignmentRepository assignmentRepository
    ) {
        this.assetRepository = assetRepository;
        this.employeeRepository = employeeRepository;
        this.assignmentRepository = assignmentRepository;
    }

    public Assignment assignAsset(AssignmentRequest request) {
        Asset asset = assetRepository.findById(request.getAssetId())
                .orElseThrow(() -> new RuntimeException("Activo no encontrado"));

        Employee employee = employeeRepository.findById(request.getEmployeeId())
                .orElseThrow(() -> new RuntimeException("Empleado no encontrado"));

        if (asset.getStatus() == AssetStatus.ASSIGNED) {
            throw new RuntimeException("El activo ya está asignado");
        }

        asset.setStatus(AssetStatus.ASSIGNED);
        assetRepository.save(asset);

        Assignment assignment = new Assignment();
        assignment.setAsset(asset);
        assignment.setEmployee(employee);
        assignment.setAssignedAt(request.getAssignedAt() != null ? request.getAssignedAt() : LocalDate.now());
        assignment.setNotes(request.getNotes());

        return assignmentRepository.save(assignment);
    }

    public Assignment returnAsset(Long assignmentId) {
        Assignment assignment = assignmentRepository.findById(assignmentId)
                .orElseThrow(() -> new RuntimeException("Asignación no encontrada"));

        assignment.setReturnedAt(LocalDate.now());

        Asset asset = assignment.getAsset();
        asset.setStatus(AssetStatus.AVAILABLE);
        assetRepository.save(asset);

        return assignmentRepository.save(assignment);
    }

    public Map<String, Object> getSummary() {
        List<Asset> assets = assetRepository.findAll();

        BigDecimal totalValue = assets.stream()
                .map(asset -> asset.getPurchaseValue() != null ? asset.getPurchaseValue() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        Map<String, Object> summary = new HashMap<>();
        summary.put("totalAssets", assetRepository.count());
        summary.put("totalEmployees", employeeRepository.count());
        summary.put("activeAssignments", assignmentRepository.countByReturnedAtIsNull());
        summary.put("totalAssetValue", totalValue);

        return summary;
    }
}
