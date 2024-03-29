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


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.EdiFabricCoreModelEdiEdiMessage;
import io.swagger.client.model.EdiFabricWebApiModelsGenerateSettings;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * EdiFabricWebApiModelsGenerateEdifactTransactions
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-24T17:09:45.649Z")
public class EdiFabricWebApiModelsGenerateEdifactTransactions {
  @SerializedName("settings")
  private EdiFabricWebApiModelsGenerateSettings settings = null;

  @SerializedName("transactions")
  private List<EdiFabricCoreModelEdiEdiMessage> transactions = null;

  public EdiFabricWebApiModelsGenerateEdifactTransactions settings(EdiFabricWebApiModelsGenerateSettings settings) {
    this.settings = settings;
    return this;
  }

   /**
   * Get settings
   * @return settings
  **/
  @ApiModelProperty(value = "")
  public EdiFabricWebApiModelsGenerateSettings getSettings() {
    return settings;
  }

  public void setSettings(EdiFabricWebApiModelsGenerateSettings settings) {
    this.settings = settings;
  }

  public EdiFabricWebApiModelsGenerateEdifactTransactions transactions(List<EdiFabricCoreModelEdiEdiMessage> transactions) {
    this.transactions = transactions;
    return this;
  }

  public EdiFabricWebApiModelsGenerateEdifactTransactions addTransactionsItem(EdiFabricCoreModelEdiEdiMessage transactionsItem) {
    if (this.transactions == null) {
      this.transactions = new ArrayList<EdiFabricCoreModelEdiEdiMessage>();
    }
    this.transactions.add(transactionsItem);
    return this;
  }

   /**
   * Get transactions
   * @return transactions
  **/
  @ApiModelProperty(value = "")
  public List<EdiFabricCoreModelEdiEdiMessage> getTransactions() {
    return transactions;
  }

  public void setTransactions(List<EdiFabricCoreModelEdiEdiMessage> transactions) {
    this.transactions = transactions;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EdiFabricWebApiModelsGenerateEdifactTransactions ediFabricWebApiModelsGenerateEdifactTransactions = (EdiFabricWebApiModelsGenerateEdifactTransactions) o;
    return Objects.equals(this.settings, ediFabricWebApiModelsGenerateEdifactTransactions.settings) &&
        Objects.equals(this.transactions, ediFabricWebApiModelsGenerateEdifactTransactions.transactions);
  }

  @Override
  public int hashCode() {
    return Objects.hash(settings, transactions);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EdiFabricWebApiModelsGenerateEdifactTransactions {\n");
    
    sb.append("    settings: ").append(toIndentedString(settings)).append("\n");
    sb.append("    transactions: ").append(toIndentedString(transactions)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

