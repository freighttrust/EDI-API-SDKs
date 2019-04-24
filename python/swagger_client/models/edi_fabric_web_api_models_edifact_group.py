# coding: utf-8

"""
    EdiFabric API

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: v1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from swagger_client.models.edi_fabric_core_model_edi_edi_message import EdiFabricCoreModelEdiEdiMessage  # noqa: F401,E501
from swagger_client.models.edi_fabric_core_model_edi_edifact_une import EdiFabricCoreModelEdiEdifactUNE  # noqa: F401,E501
from swagger_client.models.edi_fabric_core_model_edi_edifact_ung import EdiFabricCoreModelEdiEdifactUNG  # noqa: F401,E501


class EdiFabricWebApiModelsEdifactGroup(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'ung': 'EdiFabricCoreModelEdiEdifactUNG',
        'une_trailers': 'list[EdiFabricCoreModelEdiEdifactUNE]',
        'transactions': 'list[EdiFabricCoreModelEdiEdiMessage]'
    }

    attribute_map = {
        'ung': 'ung',
        'une_trailers': 'uneTrailers',
        'transactions': 'transactions'
    }

    def __init__(self, ung=None, une_trailers=None, transactions=None):  # noqa: E501
        """EdiFabricWebApiModelsEdifactGroup - a model defined in Swagger"""  # noqa: E501

        self._ung = None
        self._une_trailers = None
        self._transactions = None
        self.discriminator = None

        if ung is not None:
            self.ung = ung
        if une_trailers is not None:
            self.une_trailers = une_trailers
        if transactions is not None:
            self.transactions = transactions

    @property
    def ung(self):
        """Gets the ung of this EdiFabricWebApiModelsEdifactGroup.  # noqa: E501


        :return: The ung of this EdiFabricWebApiModelsEdifactGroup.  # noqa: E501
        :rtype: EdiFabricCoreModelEdiEdifactUNG
        """
        return self._ung

    @ung.setter
    def ung(self, ung):
        """Sets the ung of this EdiFabricWebApiModelsEdifactGroup.


        :param ung: The ung of this EdiFabricWebApiModelsEdifactGroup.  # noqa: E501
        :type: EdiFabricCoreModelEdiEdifactUNG
        """

        self._ung = ung

    @property
    def une_trailers(self):
        """Gets the une_trailers of this EdiFabricWebApiModelsEdifactGroup.  # noqa: E501


        :return: The une_trailers of this EdiFabricWebApiModelsEdifactGroup.  # noqa: E501
        :rtype: list[EdiFabricCoreModelEdiEdifactUNE]
        """
        return self._une_trailers

    @une_trailers.setter
    def une_trailers(self, une_trailers):
        """Sets the une_trailers of this EdiFabricWebApiModelsEdifactGroup.


        :param une_trailers: The une_trailers of this EdiFabricWebApiModelsEdifactGroup.  # noqa: E501
        :type: list[EdiFabricCoreModelEdiEdifactUNE]
        """

        self._une_trailers = une_trailers

    @property
    def transactions(self):
        """Gets the transactions of this EdiFabricWebApiModelsEdifactGroup.  # noqa: E501


        :return: The transactions of this EdiFabricWebApiModelsEdifactGroup.  # noqa: E501
        :rtype: list[EdiFabricCoreModelEdiEdiMessage]
        """
        return self._transactions

    @transactions.setter
    def transactions(self, transactions):
        """Sets the transactions of this EdiFabricWebApiModelsEdifactGroup.


        :param transactions: The transactions of this EdiFabricWebApiModelsEdifactGroup.  # noqa: E501
        :type: list[EdiFabricCoreModelEdiEdiMessage]
        """

        self._transactions = transactions

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(EdiFabricWebApiModelsEdifactGroup, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, EdiFabricWebApiModelsEdifactGroup):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
