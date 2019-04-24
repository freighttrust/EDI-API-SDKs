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
import io.swagger.client.model.EdiFabricCoreModelEdiEdifactUNE;
import io.swagger.client.model.EdiFabricCoreModelEdiEdifactUNG;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * EdiFabricWebApiModelsEdifactGroup
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-24T17:09:45.649Z")
public class EdiFabricWebApiModelsEdifactGroup {
  @SerializedName("ung")
  private EdiFabricCoreModelEdiEdifactUNG ung = null;

  @SerializedName("uneTrailers")
  private List<EdiFabricCoreModelEdiEdifactUNE> uneTrailers = null;

  @SerializedName("transactions")
  private List<EdiFabricCoreModelEdiEdiMessage> transactions = null;

  public EdiFabricWebApiModelsEdifactGroup ung(EdiFabricCoreModelEdiEdifactUNG ung) {
    this.ung = ung;
    return this;
  }

   /**
   * Get ung
   * @return ung
  **/
  @ApiModelProperty(value = "")
  public EdiFabricCoreModelEdiEdifactUNG getUng() {
    return ung;
  }

  public void setUng(EdiFabricCoreModelEdiEdifactUNG ung) {
    this.ung = ung;
  }

  public EdiFabricWebApiModelsEdifactGroup uneTrailers(List<EdiFabricCoreModelEdiEdifactUNE> uneTrailers) {
    this.uneTrailers = uneTrailers;
    return this;
  }

  public EdiFabricWebApiModelsEdifactGroup addUneTrailersItem(EdiFabricCoreModelEdiEdifactUNE uneTrailersItem) {
    if (this.uneTrailers == null) {
      this.uneTrailers = new ArrayList<EdiFabricCoreModelEdiEdifactUNE>();
    }
    this.uneTrailers.add(uneTrailersItem);
    return this;
  }

   /**
   * Get uneTrailers
   * @return uneTrailers
  **/
  @ApiModelProperty(value = "")
  public List<EdiFabricCoreModelEdiEdifactUNE> getUneTrailers() {
    return uneTrailers;
  }

  public void setUneTrailers(List<EdiFabricCoreModelEdiEdifactUNE> uneTrailers) {
    this.uneTrailers = uneTrailers;
  }

  public EdiFabricWebApiModelsEdifactGroup transactions(List<EdiFabricCoreModelEdiEdiMessage> transactions) {
    this.transactions = transactions;
    return this;
  }

  public EdiFabricWebApiModelsEdifactGroup addTransactionsItem(EdiFabricCoreModelEdiEdiMessage transactionsItem) {
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
    EdiFabricWebApiModelsEdifactGroup ediFabricWebApiModelsEdifactGroup = (EdiFabricWebApiModelsEdifactGroup) o;
    return Objects.equals(this.ung, ediFabricWebApiModelsEdifactGroup.ung) &&
        Objects.equals(this.uneTrailers, ediFabricWebApiModelsEdifactGroup.uneTrailers) &&
        Objects.equals(this.transactions, ediFabricWebApiModelsEdifactGroup.transactions);
  }

  @Override
  public int hashCode() {
    return Objects.hash(ung, uneTrailers, transactions);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EdiFabricWebApiModelsEdifactGroup {\n");
    
    sb.append("    ung: ").append(toIndentedString(ung)).append("\n");
    sb.append("    uneTrailers: ").append(toIndentedString(uneTrailers)).append("\n");
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

