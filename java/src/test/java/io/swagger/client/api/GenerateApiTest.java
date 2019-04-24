/*
 * EdiFabric API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.api;

import io.swagger.client.ApiException;
import io.swagger.client.model.EdiFabricWebApiModelsErrorDetails;
import io.swagger.client.model.EdiFabricWebApiModelsGenerateEdifactGroup;
import io.swagger.client.model.EdiFabricWebApiModelsGenerateEdifactInterchange;
import io.swagger.client.model.EdiFabricWebApiModelsGenerateEdifactTransactions;
import io.swagger.client.model.EdiFabricWebApiModelsGenerateGs;
import io.swagger.client.model.EdiFabricWebApiModelsGenerateIsa;
import io.swagger.client.model.EdiFabricWebApiModelsGenerateUnb;
import io.swagger.client.model.EdiFabricWebApiModelsGenerateUng;
import io.swagger.client.model.EdiFabricWebApiModelsGenerateX12Group;
import io.swagger.client.model.EdiFabricWebApiModelsGenerateX12Interchange;
import io.swagger.client.model.EdiFabricWebApiModelsGenerateX12Transactions;
import java.io.File;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for GenerateApi
 */
@Ignore
public class GenerateApiTest {

    private final GenerateApi api = new GenerateApi();

    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void generateEdifactGroupTest() throws ApiException {
        EdiFabricWebApiModelsGenerateEdifactGroup generateEdifactGroup = null;
        File response = api.generateEdifactGroup(generateEdifactGroup);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void generateEdifactInterchangeTest() throws ApiException {
        EdiFabricWebApiModelsGenerateEdifactInterchange generateEdifactInterchange = null;
        File response = api.generateEdifactInterchange(generateEdifactInterchange);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void generateEdifactTransactionsTest() throws ApiException {
        EdiFabricWebApiModelsGenerateEdifactTransactions generateEdifactTransactions = null;
        File response = api.generateEdifactTransactions(generateEdifactTransactions);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void generateGsTest() throws ApiException {
        EdiFabricWebApiModelsGenerateGs generateGs = null;
        File response = api.generateGs(generateGs);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void generateIsaTest() throws ApiException {
        EdiFabricWebApiModelsGenerateIsa generateIsa = null;
        File response = api.generateIsa(generateIsa);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void generateUnbTest() throws ApiException {
        EdiFabricWebApiModelsGenerateUnb generateUnb = null;
        File response = api.generateUnb(generateUnb);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void generateUngTest() throws ApiException {
        EdiFabricWebApiModelsGenerateUng generateUng = null;
        File response = api.generateUng(generateUng);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void generateX12GroupTest() throws ApiException {
        EdiFabricWebApiModelsGenerateX12Group generateX12Group = null;
        File response = api.generateX12Group(generateX12Group);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void generateX12InterchangeTest() throws ApiException {
        EdiFabricWebApiModelsGenerateX12Interchange generateX12Interchange = null;
        File response = api.generateX12Interchange(generateX12Interchange);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void generateX12TransactionsTest() throws ApiException {
        EdiFabricWebApiModelsGenerateX12Transactions generateX12Transactions = null;
        File response = api.generateX12Transactions(generateX12Transactions);

        // TODO: test validations
    }
    
}
