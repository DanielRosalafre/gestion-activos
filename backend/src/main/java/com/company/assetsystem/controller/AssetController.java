package com.company.assetsystem.controller;

import com.company.assetsystem.entity.Asset;
import com.company.assetsystem.repository.AssetRepository;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/assets")
public class AssetController {

    private final AssetRepository assetRepository;

    public AssetController(AssetRepository assetRepository) {
        this.assetRepository = assetRepository;
    }

    @GetMapping
    public List<Asset> getAll() {
        return assetRepository.findAll();
    }

    @PostMapping
    public Asset create(@Valid @RequestBody Asset asset) {
        return assetRepository.save(asset);
    }
}
